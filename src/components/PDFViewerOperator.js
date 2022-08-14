import { Form, Input, Button, Row, Col, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import axios from "axios";
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

export default function MyApp(props) {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
  let [searchParams, setSearchParams] = useSearchParams();
  const [file, setfile] = useState("");
  const [komen, setkomen] = useState(false);
  const [komentar, setkomentar] = useState(false);
  const location = useLocation();
  const [IsModalVisible, setIsModalVisible] = useState(false);
  const [IsModalACCVisible, setIsModalACCVisible] = useState(false);
  const [IsModalPajakVisible, setIsModalPajakVisible] = useState(false);
  const [tempKomen, settempKomen] = useState("");
  const [ready, setready] = useState(false);
  // console.log(searchParams);
  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  //   setPageNumber(1)
  // }\
  const getFile = async (id) => {
    await axios
      .get(`/laporan/file/${id}`, {}, {})
      .then((res) => {
        // console.log(res.data.result[0].file);
        setfile(`http://localhost:9000/file/${res.data.result[0].file}`);
        if (location.pathname === `/PeriksaLaporanRevisi`) {
          settempKomen(res.data.result[0].koreksi);
          setkomen(true);
          console.log("koreksi", res.data.result[0].koreksi);
          setready(true);
        } else if (
          res.data.result[0].status === "Revisi" ||
          res.data.result[0].status === "Baru"
        ) {
          setkomen(true);
          setready(true);
        }
        if (
          res.data.result[0].status === "Setuju" &&
          location.pathname === `/PimpinanPeriksaLaporan`
        ) {
          setkomen(true);
          setready(true);
        }
      })
      .catch((error) => {
        console.log(error.status);
      });
  };
  useEffect(() => {
    getFile(searchParams.get("id"));
  }, [searchParams]);

  const onFinish = (values) => {
    setkomentar(values.komen);
    setIsModalVisible(true);
    // console.log('Success:', values);
  };
  const handleOk = () => {
    let pengoreksi = "operator";
    if (location.pathname === `/PimpinanPeriksaLaporan`) {
      pengoreksi = "pimpinan";
    }
    axios
      .put(
        `/laporan/koreksi/${searchParams.get("id")}`,
        { koreksi: komentar, pengoreksi: pengoreksi },
        {}
      )
      .then((res) => {
        console.log(res);
        window.close();
      })
      .catch((error) => {
        console.log(error.status);
      });
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onACC = () => {
    // setkomentar(values.komen);
    setIsModalACCVisible(true);
    // console.log('Success:', values);
  };
  const onPajak = () => {
    // setkomentar(values.komen);
    setIsModalPajakVisible(true);
    // console.log('Success:', values);
  };
  const handleOkACC = () => {
    axios
      .put(
        `/laporan/status/${searchParams.get("id")}`,
        { status: "Setuju" },
        {}
      )
      .then((res) => {
        console.log(res);
        window.close();
      })
      .catch((error) => {
        console.log(error.status);
      });
  };
  const handleCancelACC = () => {
    setIsModalACCVisible(false);
  };
  const handleOkPajak = () => {
    axios
      .put(`/laporan/status/${searchParams.get("id")}`, { status: "Pajak" }, {})
      .then((res) => {
        console.log(res);
        window.close();
      })
      .catch((error) => {
        console.log(error.status);
      });
  };
  const handleCancelPajak = () => {
    setIsModalPajakVisible(false);
  };

  // const accModal = () => {
  //   // console.log(document.getElementById("textarea").value);
  //   setkomen(document.getElementById("textarea").value);
  //   setIsModalVisible(true);
  // };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        title="pdf"
        src={file}
        width={komen ? "70%" : "100%"}
        height="100%"
      ></iframe>
      {komen && ready && (
        <div style={{ width: "30%", height: "100%", float: "right" }}>
          <Form style={{ padding: "16px" }} onFinish={onFinish}>
            {console.log("asda", tempKomen)}
            <Form.Item
              initialValue={tempKomen}
              name={"komen"}
              style={{ heigth: "80%" }}
            >
              <Input.TextArea
                style={{ heigth: "100%" }}
                autoSize={{ minRows: 25, maxRows: 25 }}
              />
            </Form.Item>
            <Row style={{ marginTop: "32px" }}>
              <Col span={18} offset={6}>
                <Button type="primary" danger>
                  Kembali
                </Button>
                <Button
                  type="primary"
                  style={{ marginLeft: "16px" }}
                  htmlType="submit"
                >
                  Koreksi
                </Button>
                <Button
                  type="primary"
                  style={{ marginLeft: "16px", background: "#07B629" }}
                  onClick={
                    location.pathname === `/PimpinanPeriksaLaporan`
                      ? onPajak
                      : onACC
                  }
                >
                  {location.pathname === `/PimpinanPeriksaLaporan`
                    ? "Validasi Permohonan Faktur Pajak"
                    : "ACC"}
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      )}
      {/* {console.log(location.pathname)} */}
      {/* {location.pathname === `/PimpinanPeriksaLaporan` ? (
        <Button
          style={{
            position: "fixed",
            bottom: "64px",
            right: "64px",
            background: "#96DBDF",
          }}
          onClick={onPajak}
        >
          Validasi Permohonan Faktur Pajak
        </Button>
      ) : (
        <></>
      )} */}

      <Modal
        title="Koreksi"
        visible={IsModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="Tidak"
        okText="Ya"
      >
        <p>Apakah Anda yakin mengoreksi Laporan dengan </p>
        {komentar === "" ? "tanpa catatan?" : `catatan \"${komentar}\" ?`}
      </Modal>
      <Modal
        title="ACC"
        visible={IsModalACCVisible}
        onOk={handleOkACC}
        onCancel={handleCancelACC}
        cancelText="Tidak"
        okText="Ya"
      >
        <p>Apakah Anda yakin ingin meng-ACC Laporan ini?</p>
      </Modal>
      <Modal
        title="Validasi Faktur Pajak"
        visible={IsModalPajakVisible}
        onOk={handleOkPajak}
        onCancel={handleCancelPajak}
        cancelText="Tidak"
        okText="Ya"
      >
        <p>Apakah Anda Yakin Melakukan Validasi Pajak?</p>
      </Modal>
    </div>
  );
}

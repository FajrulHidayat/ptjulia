import { Form, Input, Upload, Button } from "antd";
import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
const { TextArea } = Input;

export default function MyApp(props) {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  const [file, setfile] = useState("");
  const [komen, setkomen] = useState(false);
  const [komenValue, setkomenValue] = useState("koreksi");
  // console.log(searchParams);
  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  //   setPageNumber(1)
  // }\
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  const getFile = (id) => {
    axios
      .get(`/laporan/file/${id}`, {}, {})
      .then((res) => {
        // console.log(res.data.result[0].koreksi);
        setfile(`http://localhost:9000/file/${res.data.result[0].file}`);
        if (res.data.result[0].status === "Revisi") {
          setkomenValue(res.data.result[0].koreksi);
          setkomen(true);
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
    console.log(location.state);
    console.log("Received values of form: ", values.file[0].originFileObj);
    let headers = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      // responseType: "json",
    };
    const formdata = new FormData();
    // formdata.append("id_arep",location.state.id_arep)
    // console.log(location.state);
    // formdata.append("judul",values.judul)
    formdata.append("file", values.file[0].originFileObj);
    axios
      .put(`/laporan/laporan/${searchParams.get("id")}`, formdata, headers)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          window.close();
          // navigate("../StatusLaporan",{state:{id_arep:location.state.id_arep}})
        }
      })
      .catch((error) => {
        console.log(error.status);
      });
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        title="pdf"
        src={file}
        width={komen ? "70%" : "100%"}
        height="100%"
      ></iframe>
      {console.log(komenValue)}
      {komen && (
        <div style={{ width: "30%", height: "100%", float: "right" }}>
          {/* <Form>
          <Form.Item
          name={"komen"}
          style={{heigth:"80%"}}
          > */}
          <TextArea
            style={{ heigth: "100%" }}
            autoSize={{ minRows: 25, maxRows: 25 }}
            value={komenValue}
            readOnly
          />
          <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
            <Form.Item
              name="file"
              label="File"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              extra=""
              rules={[{ required: true, message: "Upload File Laporan!" }]}
            >
              <Upload name="pdf" action="/" listType="pdf">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>

            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          {/* </Form.Item>
        </Form> */}
        </div>
      )}
      {/* <Document file="http://localhost:9000/file/file-1649065940077.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p> */}
    </div>
  );
}

import { Button, DatePicker, Form, Input, notification } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import moment from "moment";

const openNotification = () => {
  const args = {
    message: "Berhasil Menyimpan Perubahan",
    description: "",
    duration: 3,
  };
  notification.open(args);
};

const DetailArep = (props) => {
  // const [componentSize, setComponentSize] = useState('default');
  const [data, setdata] = useState();
  const [editable, seteditable] = useState(false);
  let navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const getData = async (id) => {
    let resp = await axios
      .get(`/arep/arep/${id}`, null, {})
      .then((res) => {
        // console.log(res.data);
        const newDa = [];
        res.data.result.forEach((element) => {
          // const date = FormatDate(element.tanggal_lahir);
          // console.log(element.nama);
          newDa[0] = { name: "id", value: element.id };
          newDa[1] = { name: "nama", value: element.nama };
          // newDa[2]={name:"nik",value:element.nik}
          newDa[2] = { name: "tempat_lahir", value: element.tempat_lahir };
          newDa[3] = {
            name: "tanggal_lahir",
            value: moment(element.tanggal_lahir, "YYYY-MM-DD"),
          };
          newDa[4] = { name: "wilayah", value: element.wilayah };
          newDa[5] = { name: "email", value: element.email };
          // newDa.nama=element.nama
          // newDa.nik=element.nik
          // newDa.tempat_lahir=element.tempat_lahir
          // newDa.tanggal_lahir=element.tanggal_lahir
          // newDa.wilayah=element.wilayah
          // newDa.email=element.email
          // newData.push(newDa)
          // console.log(newDa);
        });
        return newDa;
        // console.log(newData);
      })
      .catch((error) => {
        console.log(error);
      });
    setdata(resp);
    // console.log(resp);
  };
  useEffect(() => {
    getData(searchParams.get("id"));
    // console.log(searchParams.get("id"));
  }, [searchParams]);

  const simpan = (values) => {
    // console.log(values);
    let v = values;
    v.tanggal_lahir = moment(v.tanggal_lahir).format("YYYY-MM-DD");
    console.log(v);
    axios.put(`/arep/${searchParams.get("id")}`, v).then((res) => {
      openNotification();
      navigate("/operator/PenanggungJawab");
    });
  };
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      fields={data}
      onFinish={simpan}
    >
      {/* <Form.Item
              label="NIK"
              name="nik"
              rules={[
                {
                  required: true,
                  message: "NIK Harus Di Isi",
                },
              ]}
            >
              <Input disabled={!editable}/>
            </Form.Item> */}
      <Form.Item
        label="Nama"
        name="nama"
        rules={[
          {
            required: true,
            message: "Nama Harus Di Isi",
          },
        ]}
      >
        <Input disabled={!editable} />
      </Form.Item>
      <Form.Item
        label="Tempat Lahir"
        name="tempat_lahir"
        rules={[
          {
            required: true,
            message: "Tempat Lahir Harus Di Isi",
          },
        ]}
      >
        <Input disabled={!editable} />
      </Form.Item>
      <Form.Item
        label="Tanggal Lahir"
        name="tanggal_lahir"
        rules={[
          {
            required: true,
            message: "Tanggal Lahir Harus Di Isi",
          },
        ]}
      >
        <DatePicker disabled={!editable} />
      </Form.Item>
      <Form.Item
        label="Wilayah"
        name="wilayah"
        rules={[
          {
            required: true,
            message: "Wilayah Harus Di Isi",
          },
        ]}
      >
        <Input disabled={!editable} />
      </Form.Item>

      <Button
        onClick={() => {
          seteditable(!editable);
        }}
        htmlType={!editable ? "submit" : "button"}
      >
        {editable ? "Simpan" : "Ubah"}
      </Button>
      <Form.Item>
        <Button>Simpan</Button>
      </Form.Item>
    </Form>
  );
};

export default DetailArep;

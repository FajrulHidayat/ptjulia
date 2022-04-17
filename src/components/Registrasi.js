import React from "react";
import {
  Form,
  Input,
  Button,
  DatePicker
  //  Checkbox
} from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from "moment"
// import UbahDom from "../utils/UbahDom";
// import Verify from '../utils/Verify'
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class Registrasi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    // const verify =await Verify()
    // console.log(verify);
    // const token = localStorage.getItem("token");
    // // console.log(token);
    // if (token) {
    //   let headers = {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: token,
    //     },
    //     responseType: "json",
    //   };
    //   axios
    //     .post(`/auth/verify`, null, headers)
    //     .then((res) => {
    //       // console.log(res.data);
    //       if (res.data.diagnostic.status === 200) {
    //         // console.log(res.data.diagnostic.status);
    //         if (res.data.result.type === "operator jurusan") {
    //           UbahDom(`/admin`, this.props.history);
    //         }
    //         if (res.data.result.type === "jfu") {
    //           UbahDom(`/admin/jfu`, this.props.history);
    //         }
    //         if (res.data.result.type === "ksb") {
    //           UbahDom(`/admin/ksb`, this.props.history);
    //         }
    //         if (res.data.result.type === "ktu") {
    //           UbahDom(`/admin/ktu`, this.props.history);
    //         }
    //         if (res.data.result.type === "wd") {
    //           UbahDom(`/admin/wd`, this.props.history);
    //         }
    //         if (res.data.result.type === "dk") {
    //           UbahDom(`/admin/dk`, this.props.history);
    //         }
    //       }
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // } else {
    //   console.log("tidak", token);
    // }
  }
  onFinish = (values) => {
    // console.log("Success:", values);
    // // console.log('Success:', props);
    let headers = {
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "json",
    };
    // let body = {
    //       "nama":values.nama,
    //       "email":values.email,
    //       "password":values.password,
    //       "role":"arep",
      
    // };
    values.role="arep"
    values.tanggal_lahir = moment(values.tanggal_lahir).format("YYYY-MM-DD");
    //   const { history } = this.props;
    console.log(values);
    axios
      .post(`/auth/regis`, values, headers)
      .then((res) => {
        console.log(res.data);
        if (res.data.diagnostic.status === 200) {
          this.props.navigate(`/`)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  toLogin= ()=>{
    //   console.log(this.props);
      this.props.navigate(`/`)
    //   this.navigate(`/Registration`,{replace:true})
    // UbahDom(`/Registration`, this.props.history);
  }
  render() {
    return (
      <div className="loginConteiner">
        <div className="login">
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
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
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email Harus Di Isi",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Password Harus Di Isi",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="NIK"
              name="nik"
              rules={[
                {
                  required: true,
                  message: "NIK Harus Di Isi",
                },
              ]}
            >
              <Input />
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
              <Input />
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
              <DatePicker format="DD-MM-YYYY" placeholder="Tanggal Lahir"  />
            </Form.Item>
            <Form.Item
              label="Wilayah Kerja"
              name="wilayah"
              rules={[
                {
                  required: true,
                  message: "Wilayah Kerja Lahir Harus Di Isi",
                },
              ]}
            >
              <Input />
            </Form.Item>
            

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Daftar
              </Button>
              <Button type="link" onClick={this.toLogin}  >
                Masuk
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
function WithNavigate(props){
    let navigate = useNavigate();
    return <Registrasi {...props} navigate={navigate}/>
}
export default WithNavigate;

import React from "react";
import {
  Form,
  Input,
  Button,
  //  Checkbox
} from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      let headers = {
        headers: {
          // "Content-Type": "application/json",
          // "Accept": "application/json",
          Authorization: token,
        },
        // responseType: "json",
      };
      axios
        .post(`/auth/verify`, null, headers)
        .then((res) => {
          if (res.data.diagnostic.status === 200) {
            this.toNavigate(res.data.result.role)
            
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("tidak", token);
    }
  }
  onFinish = (values) => {
    console.log("Success:", values);
    // // console.log('Success:', props);
    let headers = {
      headers: {
        // "Content-Type": "application/json",
        email: values.email,
        password: values.password,
      },
      // responseType: "json",
    };
    // //   const { history } = this.props;

    axios
      .post(`/auth/login`, null, headers)
      .then((res) => {
        // console.log(res.data);
        if (res.data.diagnostic.status === 200) {
          const result = res.data.result;
          localStorage.setItem("token", res.headers.authorization);
          localStorage.setItem("role", result.role);
          console.log(result);
          this.toNavigate(result.role)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  toNavigate(role){
      this.props.navigate(`/${role}`)
  }
  toRegistration= ()=>{
      this.props.navigate(`/Registration`)
  }

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
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

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Masuk
              </Button>
              <Button type="link" onClick={this.toRegistration}  >
                Daftar
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
    return <Login {...props} navigate={navigate}/>
}

export default WithNavigate;

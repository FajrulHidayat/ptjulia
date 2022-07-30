import React from "react";
import {
  Form,
  Input,
  Button,
  Typography,
  Image, Row, Col, 
  //  Checkbox
} from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const {Title, Text, Link} = Typography;
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
    this.state = {
      error:false
    };
    this.onFinish=this.onFinish.bind(this)
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
   async onFinish(values) {
    let headers = {
      headers: {
        email: values.email,
        password: values.password,
      },
    };
    let resp = await axios
      .post(`/auth/login`, null, headers)
      .then((res) => {
        console.log(res.status);
        console.log(res.data);
        if (res.data.diagnostic.status === 200) {
          const result = res.data.result;
          localStorage.setItem("token", res.headers.authorization);
          localStorage.setItem("role", result.role);
          console.log(result);
          this.toNavigate(result.role)
        }
      })
      .catch(function (error) {
        // console.log(error);
        return error
        // if (error.response.status === 401) {
        //   this.setState({error:true})
        // }
      });
      if (resp?.response.status === 401) {
        this.setState({error:true})
      }
      // console.log(resp.response);
  };
  toNavigate(role){
      this.props.navigate(`/${role}`)
  }
  toRegistration= ()=>{
      this.props.navigate(`/Registration`)
  }
  onFail(){
    console.log("gagal");
  }
  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    // console.log(this.state.error);
    return (
      <div className="container">
        <div className="left-content-wrapper">
        <div>
          <img src="https://julia.dev.smarteksistem.com/wp-content/uploads/2021/11/Group-208-3.png" alt="logo.png" style={{width: '200px', marginBottom: 20}} />
          <Title level={3} style={{color:"#1B6C46", margin: '0', marginBottom: '8px'}}>PT. Julia Multimedia Nusantara</Title>
          <Text level={5} style={{color:"#949494", margin: '0'}}>Website Pelaporan Administrasi Tagihan Pelanggan</Text>
        </div>
        <div style={{marginTop: '80px'}} />
        <div className="left-content" >
          <Row>    
            <Col span={24}>
              <Title level={3} className="left-content-title"  >Login</Title>
              <Text className="left-content-description" >Masukkan Email dan Kata Sandi</Text>
              <div style={{marginBottom: '1.5rem'}} />
              <Form
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 18 }}
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
                  <Input   size="large"
                  placeholder="Masukkan Email" />
                </Form.Item>

                <Form.Item
                  label="Kata Sandi"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Password Harus Di Isi",
                    },
                  ]}
                >
                  <Input.Password size="large" placeholder="Masukkan Kata Sandi" />
                </Form.Item>
                  {this.state.error && <p style={{color:"red"}}>Email atau Password anda Salah</p>}

                <Form.Item
                  label="&nbsp;"
                  name=""
                  colon={false}
                  style={{marginBottom: '5px'}}
                >
                    <Button type="primary" htmlType="submit" style={{width: '100%'}} size="large" >
                    Masuk
                  </Button>
                </Form.Item>

                <Form.Item
                  label="&nbsp;"
                  name=""
                  colon={false}
                >
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                    Belum Punya Akun ?&nbsp;
                    <Text onClick={this.toRegistration} style={{color: 'blue', cursor: 'pointer'}}  >
                      Daftar
                    </Text>
                  </div>
                </Form.Item>


                {/* <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    Masuk
                  </Button>
                  <Button type="link" onClick={this.toRegistration}  >
                    Daftar
                  </Button>
                </Form.Item> */}
              </Form>
            </Col>
          </Row>
        
        </div>

        </div>
       
        <div className="right-content">
        
        </div>
        {/* <iframe title="pdf" src={"https://stardevseafinance.blob.core.windows.net/resources/generated/generated_175d4060-9580-46a1-ab34-0169589d0106.pdf?skoid=5a2377dc-1196-4e2c-b5a2-e30816441210&sktid=ca06aaa2-e01f-4e0c-9567-f2256f398023&skt=2022-06-15T06%3A50%3A11Z&ske=2022-06-16T06%3A51%3A11Z&sks=b&skv=2020-10-02&sv=2020-08-04&st=2022-06-15T09%3A36%3A19Z&se=2022-06-15T09%3A51%3A20Z&sr=b&sp=r&sig=IztY%2Bcxqn3m6xUJMxgoGoo5U2EM5sPH2joOdwxZmqmE%3D"}  width={"100%"} height="100%"></iframe> */}
      </div>
    );
  }
}

function WithNavigate(props){
    let navigate = useNavigate();
    return <Login {...props} navigate={navigate}/>
}

export default WithNavigate;


import { Layout,Menu,Typography  } from 'antd';
import { useEffect, useState } from 'react';
import {
    TeamOutlined,
  } from '@ant-design/icons';
  // import logo from '../logo.svg';
import { Outlet } from "react-router-dom";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios"
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
const {Title} = Typography




export default function DashboardAdmin(props) {
    const navigate = useNavigate()
    const [collapsed,setCollapsed] = useState(false);
    const [akun,setakun] = useState({foto:"blankProfile.png",nama:""});
    const location = useLocation()
    useEffect(() => {
      const token = localStorage.getItem("token");
      // console.log(token);
      let headers = {
        headers: {
          Authorization: token,
        },
      };
      axios
        .post(`/auth/verify`, null, headers)
        .then((res) => {
          axios
            .get(`/auth/${res.data.result.email}`, null, headers)
            .then((resp) => {
              let result = resp.data.result;
              if(result.foto === null || result.foto === ""){
                result.foto = "blankProfile.png"
              }
              if(result[0].role === "arep"){
                axios
                  .get(`/arep/${result[0].id}`, null, headers)
                  .then((res) => {
                    result[0].id_arep = res.data.result[0].id
                  })
                  .catch((error) => {
                    console.log(error.status);
                  });
              }
              setakun(result[0]);
            })
            .catch((error) => {
              console.log(error.status);
            });
        })
        .catch((error) => {
          console.log(error.status);
        });
    }, []);
        // const { collapsed } = this.state;
        const logout=()=>{
          // const token = localStorage.getItem("token")
          // let headers = {
          //   headers: {
          //     "Content-Type": "application/json",
          //     "Authorization": token,
          //   },
          //   responseType: "json"
          // };      
          // axios
          //   .post(`/auth/logout`, null, headers)
          //   .then(res => {
                 
          //    console.log(res);
              
          //   })
          //   .catch((error)=> {
              
          //   console.log(error.status);
          //   });
            localStorage.removeItem("token")
            localStorage.removeItem("level")
            navigate("/");
            // UbahDom(`/`,props.history)

        }
        const handleClick = (e) => {
          // console.log("e",e)
          // console.log("this",akun.role)
          // let role = akun.role
          // console.log(akun.role.length);
          // if(e === )
          let to = e.key.slice(akun.role.length+2,e.length)
          navigate(to,{state:akun});
          // switch (e.key) {
          //   case "/arep": {
          //     navigate("");
          //     return;
          //   }
          //   case "/arep/TambahLaporan": {
          //     navigate("TambahLaporan",{state:akun});
          //     return;
          //   }
            
           
          //   default:{
          //     navigate("/");
          //     return "foo";
          //   }
          // }
        };

        return (
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={()=>setCollapsed(!collapsed)} style={{background:"#354052"}}>
              <div className="logo">
                <img src={`http://localhost:9000/image/${akun.foto}`} alt="foto"/>
                <Title level={4} style={{color:"#ffffff",textAlign:"center"}}>{akun.nama}</Title>
              </div>
              <Menu theme="dark" defaultSelectedKeys={[]} selectedKeys={[location.pathname]} mode="inline" onClick={handleClick} >
                  {akun.role === "arep" ?(
                    <><Menu.Item key="/arep" icon={<TeamOutlined />}>Unduh BOA</Menu.Item><SubMenu key="sub2" icon={<TeamOutlined />} title="Kelola Laporan">
                    <Menu.Item key="/arep/TambahLaporan">Tambah Laporan</Menu.Item>
                    <Menu.Item key="/arep/StatusLaporan">Status Laporan</Menu.Item>
                  </SubMenu></>
                  ):akun.role === "operator"?(
                    <>
                      <SubMenu key="sub1" icon={<TeamOutlined />} title="Master Data">
                        <Menu.Item key="/operator/PenaggungJawab">Data Penanggung Jawab</Menu.Item>
                        <Menu.Item key="/operator/WilayahKerja">Data Wilayah Kerja</Menu.Item>
                      </SubMenu>
                      <SubMenu key="sub2" icon={<TeamOutlined />} title="Data Pelaporan">
                        <Menu.Item key="/operator/LaporanMasuk">Laporan Masuk</Menu.Item>
                        <Menu.Item key="/operator/LaporanKoreksi">Laporan di Koreksi</Menu.Item>
                        <Menu.Item key="/operator/LaporanSetuju">Laporan di Setujui</Menu.Item>
                      </SubMenu>
                    </>
                  ):akun.rrole === "pimpinan"?(
                    <><Menu.Item key="/arep" icon={<TeamOutlined />}>Unduh BOA</Menu.Item><SubMenu key="sub2" icon={<TeamOutlined />} title="Kelola Laporan">
                    <Menu.Item key="/arep/TambahLaporan">Tambah Laporan</Menu.Item>
                    <Menu.Item key="/arep/StatusLaporan">Status Laporan</Menu.Item>
                  </SubMenu></>
                  ):(<></>)}
                  
              </Menu>
              
            {/* <div >
              <Menu style={{position: "absolute",bottom: "50px"}} theme="dark" mode="inline" onClick={logout}>
                <Menu.Item key="99" icon={<PoweroffOutlined />}>
                Keluar
                </Menu.Item>
                
              </Menu>
            </div> */}
            {/* <Button
              type="primary"
              // theme="dark"
              icon={<PoweroffOutlined />}
              // onClick={() => this.logout}
              ghost block
            >
              Keluar
            </Button> */}
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0,background: "#96DBDF" }} >
                <Menu mode="horizontal" style={{background: "#96DBDF", float:'right',color:"#000000"}}>
                  <Menu.Item onClick={logout} key="1" >Log out</Menu.Item>
                </Menu>
              </Header>
              <Content style={{ margin: '0 16px' }}>
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb> */}
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <Outlet/>
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>
        );
      }


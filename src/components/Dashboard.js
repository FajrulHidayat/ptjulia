import { Layout, Menu, Typography, Avatar, Image, Upload } from "antd";
import { useEffect, useState } from "react";
import { TeamOutlined } from "@ant-design/icons";
// import logo from '../logo.svg';
import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

export default function DashboardAdmin(props) {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [akun, setakun] = useState({ foto: "blankProfile.png", nama: "" });
  const [refresh, setrefresh] = useState(false);
  const location = useLocation();
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
        // console.log(res);
        axios
          .get(`/auth/${res.data.result.email}`, null, headers)
          .then((resp) => {
            let result = resp.data.result;
            // console.log(result);
            if (result.foto === null || result.foto === "") {
              result.foto = "blankProfile.png";
            }
            switch (result[0].role) {
              case "arep":
                result[0].jabatan = "Penanggung Jawab";
                break;
              case "operator":
                result[0].jabatan = "Operator";
                break;
              case "pimpinan":
                result[0].jabatan = "Pimpinan";
                break;

              default:
                break;
            }
            console.log(result);
            if (result[0].role === "arep") {
              // console.log(result[0]);
              axios
                .get(`/arep/arep/${result[0].id}`, null, headers)
                .then((respo) => {
                  result[0].id_arep = respo.data.result[0].id;
                  setakun(result[0]);
                })
                .catch((error) => {
                  console.log(error);
                });
            } else {
              setakun(result[0]);
            }
          })
          .catch((error) => {
            console.log(error.status);
          });
      })
      .catch((error) => {
        console.log(error);
        navigate("/");
      });
  }, [navigate, refresh]);
  // const { collapsed } = this.state;
  const logout = () => {
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
    localStorage.removeItem("token");
    localStorage.removeItem("level");
    navigate("/");
    // UbahDom(`/`,props.history)
  };
  const handleClick = (e) => {
    // console.log("e",e)
    // console.log("this",akun.role)
    // let role = akun.role
    // console.log(akun.role.length);
    // if(e === )
    let to = e.key.slice(akun.role.length + 2, e.length);
    console.log(akun);
    navigate(to, { state: akun });
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
  const PPChange = (values) => {
    // console.log(akun);
    // console.log(values.file);
    // console.log(location);
    const formdata = new FormData();
    formdata.append("foto", values.file.originFileObj);
    axios.put(`/arep/foto/${akun.id}`, formdata).then((res) => {
      // openNotification();
      // console.log(res);
      setrefresh(!refresh);
      navigate(location.pathname);
    });
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
        style={{ background: "#354052" }}
      >
        <div
          className="logo"
          style={
            collapsed
              ? { height: "50px", width: "50px" }
              : { height: "150px", width: "150px" }
          }
        >
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            // beforeUpload={beforeUpload}
            onChange={PPChange}
          >
            <Avatar
              src={`http://localhost:9000/image/${akun.foto}`}
              style={
                collapsed
                  ? { height: "50px", width: "50px" }
                  : { height: "150px", width: "150px" }
              }
            />
          </Upload>
          {/* <img src={`http://localhost:9000/image/${akun.foto}`} alt="foto"/> */}
        </div>
        <Title
          level={4}
          style={
            collapsed
              ? { display: "none" }
              : { color: "#ffffff", textAlign: "center" }
          }
        >
          {akun.nama}
        </Title>
        <Title
          level={5}
          style={
            collapsed
              ? { display: "none" }
              : { color: "#ffffff", textAlign: "center", marginTop: "0px" }
          }
        >
          {akun.jabatan}
        </Title>
        <Menu
          theme="dark"
          defaultSelectedKeys={[]}
          selectedKeys={[location.pathname]}
          mode="inline"
          onClick={handleClick}
        >
          {console.log(akun)}
          {akun.role === "arep" ? (
            <>
              <Menu.Item key="/arep" icon={<TeamOutlined />}>
                Unduh BAO
              </Menu.Item>
              <SubMenu
                key="sub2"
                icon={<TeamOutlined />}
                title="Kelola Laporan"
              >
                <Menu.Item key="/arep/TambahLaporan">Tambah Laporan</Menu.Item>
                <Menu.Item key="/arep/StatusLaporan">Status Laporan</Menu.Item>
              </SubMenu>
            </>
          ) : akun.role === "operator" ? (
            <>
              <SubMenu key="sub1" icon={<TeamOutlined />} title="Master Data">
                <Menu.Item key="/operator/PenanggungJawab">
                  Data Penanggung Jawab
                </Menu.Item>
                <Menu.Item key="/operator/WilayahKerja">
                  Data Wilayah Kerja
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                icon={<TeamOutlined />}
                title="Data Pelaporan"
              >
                <Menu.Item key="/operator/LaporanMasuk">
                  Laporan Masuk
                </Menu.Item>
                <Menu.Item key="/operator/LaporanKoreksi">
                  Laporan di Koreksi
                </Menu.Item>
                <Menu.Item key="/operator/LaporanSetuju">
                  Laporan di Setujui
                </Menu.Item>
              </SubMenu>
            </>
          ) : akun.role === "pimpinan" ? (
            <>
              <Menu.Item key="/pimpinan/PenanggungJawab">
                Data Penanggung Jawab
              </Menu.Item>
              <Menu.Item key="/pimpinan/LaporanSetuju">Data Laporan</Menu.Item>
              <Menu.Item key="/pimpinan/LaporanPajak">
                Data Validasi Faktur Pajak
              </Menu.Item>
            </>
          ) : (
            <></>
          )}
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
        <Header
          className="site-layout-background"
          style={{ padding: 0, background: "#96DBDF" }}
        >
          <Menu
            mode="horizontal"
            style={{ background: "#96DBDF", float: "right", color: "#000000" }}
          >
            <Menu.Item onClick={logout} key="1">
              Log out
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb> */}
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

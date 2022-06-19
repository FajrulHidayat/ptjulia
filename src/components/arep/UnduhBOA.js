import {Card,Row,Col,Typography, Button} from 'antd'
import { Link } from 'react-router-dom';
const {Title} = Typography;
export default function UnduhBOA(props){
    const Unduh =()=>{
        var text = "Template BOA";
        var filename =   "/backcover.docx";
        var element = document.createElement('a');
                  element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(text));
                  element.setAttribute('download', filename);
                  document.body.appendChild(element);
                  element.click();
    }
    return(
        <div>
            <Title level={2}strong style={{marginBottom:0,marginTop:0,textAlign:"center"}}>Selamat Datang</Title>
            <Title level={3} style={{marginBottom:0,marginTop:0,textAlign:"center"}}>Di Sistem Administrasi Pelaporan Tagihan</Title>
            <Title level={3} style={{marginBottom:0,marginTop:0,textAlign:"center"}}>Pelanggan</Title>
            <Title level={2}strong style={{marginBottom:0,marginTop:0,textAlign:"center"}}>PT. JULIA MULTIMEDIA NUSANTARA</Title>

            <Card title="Informasi format pelaporan administrasi" style={{textAlign:"center"}} headStyle={{backgroundColor:"#96DBDF",fontWeight:"bold"}} >
                <Row>
                    <Col span={6} offset={5}>
                    {/* <Card.Grid style={gridStyle}> */}
                        <Card type='inner' title="Lapiran Pelanggan Existing" headStyle={{backgroundColor:"#0073AA",color:"#ffffff",fontWeight:"bold"}} bodyStyle={{backgroundColor:"rgba(0, 115, 170, 0.12)"}}>
                            <h3>BAST</h3>
                            <h3>PO</h3>
                            <h3>SPH</h3>
                        </Card>
                    </Col>
                    {/* </Card.Grid> */}
                    {/* <Card.Grid style={gridStyle}> */}
                    <Col span={6} offset={2}>
                        <Card type='inner' title="Lapiran Pelanggan PSB" headStyle={{backgroundColor:"#0073AA",color:"#ffffff",fontWeight:"bold"}} bodyStyle={{backgroundColor:"rgba(0, 115, 170, 0.12)"}} >
                            <h3>Dokumen Pekerjaan</h3>
                            <h3>Hasil UAT</h3>
                            <h3>SPK</h3>
                            <h3>BAST</h3>
                            <h3>PO</h3>
                            <h3>SPH</h3>
                        </Card>
                    </Col>
                    {/* </Card.Grid> */}
                </Row>
                <Row style={{marginTop:"32px"}}>
                    <Col span={2} offset={11}>
                        <Link to="/BAO.docx" target="_blank" download>Unduh BAO</Link>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}
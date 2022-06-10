import {Typography,Row,Col} from 'antd'
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
const {Title} = Typography;
ChartJS.register(
    ArcElement, Tooltip, Legend
  );
export default function IndexLaporan(props){
    const [data, setdata] = useState()
    const [ready, setready] = useState(false)
    const [dataCharts, setdataCharts] = useState()
    const options = {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 14,
                        color:"white"
                    }
                }
            }
        }
      };
      
    
      const getData = ()=>{
          axios.get("/laporan/opChart").then((res)=>{
            //   console.log(res.data.result[0]);
              let dataResp = res.data.result[0]
              
            const values = Object.values(dataResp);
            const max = Math.max(...values)+(Math.max(...values)/2);
            //   console.log(dataResp);
            //   console.log(Math.max(...values));
              const labels = ['Laporan Masuk', 'Laporan Dikoreksi', 'Laporan Disetujui', 'Total Penanggung Jawab'];
              setdataCharts([
                  {
                    labels:['Laporan Masuk',""],
                        datasets: [
                        {
                            label: 'Dataset 1',
                            data: [dataResp.baru,max-dataResp.baru],
                            backgroundColor: ['#02A7EB','rgba(255, 99, 132, 0)'],
                            borderWidth: 0,
                            color:"#ffffff"
                        }
                        ],
                    },
                  {
                    labels: ['Laporan Dikoreksi',""],
                        datasets: [
                        {
                            label: 'Dataset 1',
                            data: [dataResp.koreksi,max-dataResp.koreksi],
                            backgroundColor: ['#D00A0A','rgba(255, 99, 132, 0)'],
                            borderWidth: 0,
                        }
                        ],
                    },
                  {
                    labels:['Laporan Disetujui',""],
                        datasets: [
                        {
                            label: 'Dataset 1',
                            data: [dataResp.setuju,max-dataResp.setuju],
                            backgroundColor: ['#ED5595','rgba(255, 99, 132, 0)'],
                            borderWidth: 0,
                        }
                        ],
                    },
                  {
                    labels:['Total Penanggung Jawab',""],
                        datasets: [
                        {
                            label: 'Dataset 1',
                            data: [dataResp.arep,max-dataResp.arep],
                            backgroundColor: ['#07B629','rgba(255, 99, 132, 0)'],
                            borderWidth: 0,
                        }
                        ],
                    },
                ])
              setdata(res.data.result[0])
              setready(true)
          })
      }
      useEffect(() => {
        getData();
      
      }, [])

    return(
        <div>
            {/* { console.log(ready)}
            { console.log(dataCharts)} */}
            <div>
                {ready&&(<Row>
                    <Col span={6} style={{background:"#96DBDF",position:"relative",padding:"32px"}}>
                <Doughnut options={options} data={dataCharts[0]}/> 
                <p style={{textAlign:'center',position:"absolute",top:"58%",left:"48%"}}>{data.baru}</p>
                </Col>
                 <Col span={6}  style={{background:"#FB7C7C",position:"relative",padding:"32px"}}>
                <Doughnut data={dataCharts[1]}/>
                <p style={{textAlign:'center',position:"absolute",top:"58%",left:"48%"}}>{data.koreksi}</p>
                </Col>
                <Col span={6} style={{background:"#F3D8B3",position:"relative",padding:"32px"}}>
                <Doughnut data={dataCharts[2]}/> 
                <p style={{textAlign:'center',position:"absolute",top:"58%",left:"48%"}}>{data.setuju}</p>
                </Col>
                <Col span={6}  style={{background:"#8DEDA0",position:"relative",padding:"32px"}}>
                <Doughnut data={dataCharts[3]}/> 
                <p style={{textAlign:'center',position:"absolute",top:"58%",left:"48%"}}>{data.arep}</p>
                </Col>
                </Row>)}
            </div>
            <Title level={2}strong style={{marginBottom:0,marginTop:0,textAlign:"center"}}>Selamat Datang</Title>
            <Title level={3} style={{marginBottom:0,marginTop:0,textAlign:"center"}}>Di Sistem Administrasi Pelaporan Tagihan</Title>
            <Title level={3} style={{marginBottom:0,marginTop:0,textAlign:"center"}}>Pelanggan</Title>
            <Title level={2}strong style={{marginBottom:0,marginTop:0,textAlign:"center"}}>PT. JULIA MULTIMEDIA NUSANTARA</Title>

            
        </div>
    )
}
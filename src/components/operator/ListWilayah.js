import {Card, Col, Row} from "antd"
import axios from "axios"
import { useEffect, useState } from "react" 
import { EnvironmentOutlined,FolderOpenOutlined } from '@ant-design/icons';
import { Link, useNavigate } from "react-router-dom";

export default function ListWilayah(props){
    const [wilayah, setwilayah] = useState()
    const navigate = useNavigate()
    const getWilayah=()=>{
        axios.get(`/arep/wilayah`, null, {})
        .then((res) => {
        setwilayah(res.data.result)
        console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    useEffect(() => {
        getWilayah()
    },[] )
    
    return(
        <Card title="Data Wilayah" bordered={false} headStyle={{backgroundColor:"#96DBDF",textAlign:"center"}}>
            <Row>
            {wilayah?.map((wil,index)=>(
                <Col key={index} span={12} offset={9}><div style={{background:"##F4F7FD",width:"180px",float:"left"}}><EnvironmentOutlined />{wil.Wilayah}</div> <button onClick={()=>navigate(`../DataWilayah`,{state:{wilayah:wil.Wilayah}})}><FolderOpenOutlined /> Open Data</button></Col>
            ))}
            </Row>
        </Card>
    )
}
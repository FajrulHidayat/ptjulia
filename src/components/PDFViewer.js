import { Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'; 


export default function MyApp(props) {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
  let [searchParams, setSearchParams] = useSearchParams();
  const [file, setfile] = useState("")
  const [komen, setkomen] = useState(false)
  // console.log(searchParams);
  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  //   setPageNumber(1)
  // }\
  const getFile = (id) => {
    axios
      .get(`/laporan/file/${id}`, {},{} )
      .then((res) => {
        // console.log(res.data.result[0].file);
        setfile(`http://localhost:9000/file/${res.data.result[0].file}`)
        if (res.data.result[0].status === "Revisi") {
          setkomen(true)
        }
      })
      .catch((error) => {
        console.log(error.status);
      });
  }
  useEffect(() => {
    getFile(searchParams.get("id"))
  
    
  }, [searchParams])

      
  return (
    <div style={{width:"100%",height:"100vh"}}>
      
      <iframe title="pdf" src={file}  width={komen?"70%":"100%"} height="100%"></iframe>
      {komen && <div style={{width:"30%",height:"100%",float:"right"}}>
        <Form>
          <Form.Item
          name={"komen"}
          style={{heigth:"80%"}}
          >
            <Input.TextArea style={{heigth:"100%"}} autoSize={{minRows:25, maxRows:25}}/>
          </Form.Item>
        </Form>
      </div>}
      {/* <Document file="http://localhost:9000/file/file-1649065940077.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p> */}
    </div>
  );
}

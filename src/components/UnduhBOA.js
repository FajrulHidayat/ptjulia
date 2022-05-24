import { Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'; 


export default function MyApp(props) {
 
      
  return (
    <div style={{width:"100%",height:"100vh"}}>
      
      <iframe title="pdf" src={file}  width={komen?"70%":"100%"} height="100%"></iframe>
     
    </div>
  );
}

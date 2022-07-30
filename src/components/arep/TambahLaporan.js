import {Form,Upload,Button,Input,Typography} from "antd"
import { UploadOutlined } from '@ant-design/icons';
import { useLocation,useNavigate } from "react-router-dom";
import axios from "axios";

const {Title} = Typography

export default function TambahLaporan(props){
  const navigate = useNavigate()
    const location = useLocation();
    // console.log(location);
    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
    };

    const onFinish = (values) => {
        console.log(location.state);
        console.log('Received values of form: ', values.file[0].originFileObj);
        let headers = {
            headers: {
              "Content-Type": 'multipart/form-data',
            },
            // responseType: "json",
          };
        const formdata = new FormData();
        formdata.append("id_arep",location.state.id_arep)
        console.log(location.state.id_arep);
        formdata.append("judul",values.judul)
        formdata.append("file",values.file[0].originFileObj)
          axios
            .post(`/laporan/`, formdata,headers )
            .then((res) => {
              console.log(res);
              if(res.status === 200){
                navigate("../StatusLaporan",{state:{id_arep:location.state.id_arep}})
              }
            })
            .catch((error) => {
              console.log(error.status);
            });
    };

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
      };

    return(
        <div>
          {console.log(location.state)}
            <Title style={{color:"#0073AA"}}>Tambah Laporan</Title>

            <Form name="validate_other"
            {...formItemLayout}
            onFinish={onFinish}
            >
                <Form.Item 
                    label="judul"
                    name="judul"
                    rules={[{ required: true, message: 'Masukkan Judul Laporan!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                    name="file"
                    label="File"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    extra=""
                    rules={[{ required: true, message: 'Upload File Laporan!' }]}
                >
                    <Upload name="pdf" action="/" listType="pdf">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
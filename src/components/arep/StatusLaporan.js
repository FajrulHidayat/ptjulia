import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import axios from 'axios';
import { useNavigate,useLocation,Link } from "react-router-dom";
import FormatDate from "../../utils/FormatDate"


class StatusLaporan extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
    data:[]
  };

componentDidMount(){
    let newData=[]
    axios
    .get(`/laporan/${this.props.location.state.id_arep}`, null, {})
    .then((res) => {
    //   console.log(res.data);
      res.data.result.forEach(element => {
          const newDa ={}
          newDa.key=element.id
          newDa.upload=FormatDate(element.createdAt)
          newDa.update=FormatDate(element.updatedAt)
          newDa.judul=element.judul
          newDa.file=element.file
          newDa.status=element.status

            newData.push(newDa)
        });
        this.setState({data:newData})
    })
    .catch((error) => {
      console.log(error.status);
    });
}

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns = [
      {
        title: 'Tanggal Upload',
        dataIndex: 'upload',
        key: 'upload',
        width: '30%',
        ...this.getColumnSearchProps('upload'),
      },
      {
        title: 'Tanggal Update',
        dataIndex: 'update',
        key: 'update',
        width: '20%',
        ...this.getColumnSearchProps('update'),
      },
      {
        title: 'Judul',
        dataIndex: 'judul',
        key: 'judul',
        ...this.getColumnSearchProps('judul'),
        sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        ...this.getColumnSearchProps('status'),
        render: (text, record) => {
            let color="#ffffff"
            switch (record.status) {
                case "Baru":{
                    color="#0073AA"
                    break;
                }
                case "Revisi":{
                    color="#950303"
                    break;
                }
                case "Disetujui":{
                    color="#07B629"
                    break;
                }
            
                default:{
                    color="#ffffff"
                    break;
                }
            }
            return(
                <div style={{backgroundColor:color,color:"#ffffff",textAlign:"center",marginLeft:"30%",marginRight:"30%",borderRadius:"5px"}}>
                    {/* {console.log(record)} */}
                    {record.status}
                </div>
            )
            // <Button onClick={() => UbahDom(`Permohonan/${record.id}/${this.state.route}`, this.props.history)}>Lihat</Button>
        },
      },
      {
        title: "Aksi",
        dataIndex: "aksi",
        key: "aksi",
        render: (text, record) => (
          <Link
            target="_blank"
            to={{
              pathname: `/laporan?id=${record.key}&status=${record.status}`,
              // search:`?id=${record.id_surat}`
            }}
          >
            {console.log(record)}
            <Button
              style={{
                backgroundColor: "#FF4D4F",
                color: "white",
              }}
            >
              Lihat
            </Button>
          </Link>
          // <Button onClick={() => UbahDom(`Permohonan/${record.id}/${this.state.route}`, this.props.history)}>Lihat</Button>
        ),
      },
    ];
    return <Table columns={columns} dataSource={this.state.data} />;
  }
}

function WithNavigate(props){
    let navigate = useNavigate();
    let location = useLocation()
    return <StatusLaporan {...props} navigate={navigate} location={location}/>
}

export default WithNavigate
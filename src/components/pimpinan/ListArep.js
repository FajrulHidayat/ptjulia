import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import axios from 'axios';
import { useNavigate,useLocation } from "react-router-dom";


class StatusLaporan extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
    data:[]
  };

componentDidMount(){
    let newData=[]
    axios
    .get(`/arep`, null, {})
    .then((res) => {
    //   console.log(res.data);
      res.data.result.forEach(element => {
          const newDa ={}
          newDa.key=element.id
          newDa.nama=element.nama
          newDa.nik=element.nik
          newDa.ttl=`${element.tempat_lahir}/${element.tanggal_lahir}`
          newDa.wilayah=element.wilayah
          newDa.email=element.email

            newData.push(newDa)
        });
        this.setState({data:newData})
    })
    .catch((error) => {
      console.log(error);
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
        title: 'Nama',
        dataIndex: 'nama',
        key: 'nama',
        width: '30%',
        ...this.getColumnSearchProps('nama'),
      },
      {
        title: 'NIK',
        dataIndex: 'nik',
        key: 'nik',
        width: '20%',
        ...this.getColumnSearchProps('nik'),
      },
      {
        title: 'Tempat/Tanggal Lahir',
        dataIndex: 'ttl',
        key: 'ttl',
        ...this.getColumnSearchProps('ttl')
      },
      {
        title: 'Wilayah Kerja',
        dataIndex: 'wilayah',
        key: 'wilayah',
        ...this.getColumnSearchProps('wilayah'),
        
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        ...this.getColumnSearchProps('email'),
        
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
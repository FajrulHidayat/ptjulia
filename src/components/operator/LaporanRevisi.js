import { Table, Input, Button, Space, Typography } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import moment from "moment";

const { Title } = Typography;

class LaporanRevisi extends React.Component {
  state = {
    searchText: "",
    searchedColumn: "",
    data: [],
  };

  componentDidMount() {
    let newData = [];
    console.log(this.props.location.state.wilayah);
    axios
      .get(`/laporan/find?status=Revisi`, null, {})
      .then((res) => {
        //   console.log(res.data);
        res.data.result.forEach((element) => {
          const newDa = {};
          newDa.key = element.id;
          newDa.nama = element.nama;
          newDa.wilayah = element.wilayah;
          newDa.createAt = moment(element.createAt).format("DD-MM-YYYY");
          newDa.updateAt = moment(element.updateAt).format("DD-MM-YYYY");
          newDa.status = element.status;

          newData.push(newDa);
        });
        this.setState({ data: newData });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
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
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
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
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
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

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  render() {
    const columns = [
      {
        title: "Nama Penanggung Jawab",
        dataIndex: "nama",
        key: "nama",
        width: "30%",
        ...this.getColumnSearchProps("nama"),
      },
      {
        title: "Wilayah",
        dataIndex: "wilayah",
        key: "wilayah",
        width: "20%",
        ...this.getColumnSearchProps("wilayah"),
      },
      {
        title: "Tanggal Di Unggah",
        dataIndex: "createAt",
        key: "createAt",
        ...this.getColumnSearchProps("createAt"),
      },
      {
        title: "Tanggal Di Perbaharui",
        dataIndex: "updateAt",
        key: "updateAt",
        ...this.getColumnSearchProps("updateAt"),
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        ...this.getColumnSearchProps("status"),
      },
      {
        title: "Aksi",
        dataIndex: "aksi",
        key: "aksi",
        render: (text, record) => (
          <Link
            target="_blank"
            to={{
              pathname: `/laporan?id=${record.key}&status=Revisi`,
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
    return (
      <div>
        <Title>Data Pelaporan</Title>
        <Title level={3}>Laporan Revisi</Title>
        <Table columns={columns} dataSource={this.state.data} />
      </div>
    );
  }
}

function WithNavigate(props) {
  let navigate = useNavigate();
  let location = useLocation();
  return <LaporanRevisi {...props} navigate={navigate} location={location} />;
}

export default WithNavigate;

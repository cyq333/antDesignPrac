import React, { Component } from "react";
import { Select, Table, Checkbox, Pagination } from "antd";
import "./rightColumn.css";

const Option = Select.Option;

const columns = [
  {
    title: "队列名称",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "座席总数",
    dataIndex: "total",
    key: "total"
  },
  {
    title: "呼叫分配方式",
    dataIndex: "method",
    key: "method"
  },
  {
    title: "班长席",
    dataIndex: "master",
    key: "master"
  },
  {
    title: "操作",
    key: "action",
    render: (text, record) => <a>{`删除${record.name}`}</a>
  }
];

const data = [];

for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: "John" + i,
    total: 32,
    method: "New York",
    master: "li"
  });
}

const CheckboxGroup = Checkbox.Group;

const plainOptions = ["空闲", "离线", "响铃", "通话", "整理", "置忙"];
const defaultCheckedList = [];

const phoneList = [
  {
    title: "座席编号",
    dataIndex: "num",
    key: "num"
  },
  {
    title: "姓名",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "坐席类型",
    dataIndex: "type",
    key: "type"
  },
  {
    title: "接听总数",
    dataIndex: "total",
    key: "total"
  }
];
const phoneData = [
  {
    key: "1",
    num: "1",
    name: "lihua",
    type: "接入",
    total: 10
  },
  {
    key: "2",
    num: "2",
    name: "lihua",
    type: "接入",
    total: 10
  },
  {
    key: "3",
    num: "3",
    name: "lihua",
    type: "接入",
    total: 10
  },
  {
    key: "4",
    num: "4",
    name: "lihua",
    type: "接入",
    total: 10
  },
  {
    key: "5",
    num: "5",
    name: "lihua",
    type: "接入",
    total: 10
  }
];

class RightColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedList: defaultCheckedList,
      indeterminate: false,
      checkAll: false
    };
  }

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate:
        !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length
    });
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked
    });
  };

  render() {
    return (
      <div className="rightcontainer">
        <div>
          <label>选择队列：</label>
          <Select defaultValue="队列1" style={{ width: 120 }}>
            <Option value="队列2">队列2</Option>
            <Option value="队列3">队列3</Option>
            <Option value="队列4">队列4</Option>
          </Select>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ defaultCurrent: 2, defaultPageSize: 3 }}
        >
          <Pagination
            defaultCurrent={2}
            total={1}
            pageSize={1}
            showSizeChanger={true}
          />
        </Table>
        <div>
          <div>
            <span>座席列表</span>
          </div>
          <hr />
          <div>
            <label>座席状态：</label>
            <Checkbox
              indeterminate={this.state.indeterminate}
              onChange={this.onCheckAllChange}
              checked={this.state.checkAll}
            >
              全选
            </Checkbox>
            <CheckboxGroup
              options={plainOptions}
              value={this.state.checkedList}
              onChange={this.onChange}
            />
          </div>
        </div>
        <Table columns={phoneList} dataSource={phoneData} />
      </div>
    );
  }
}

export default RightColumn;

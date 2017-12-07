import React, { Component } from "react";
import { Input, Select, Button } from "antd";
import "./leftColumn.css";

class LeftColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="leftcontainer">
        <div className="greybac">
          <div>
            <label>热线号码：</label>
            <Input className="inputstyle" />
          </div>
          <div>
            <label>坐席号：</label>
            <Input className="inputstyle" />
          </div>
          <div>
            <label>密码：</label>
            <Input className="inputstyle" />
          </div>
          <div>
            <label>绑定电话：</label>
            <Input className="inputstyle" />
          </div>
          <div>
            <label>电话类型：</label>
            <Select defaultValue="电话号码" style={{ width: 120 }}>
              <Option value="座机号">座机号</Option>
              <Option value="手机号">手机号</Option>
              <Option value="未知">未知</Option>
            </Select>
          </div>
          <div>
            <label>初始状态：</label>
            <Select defaultValue="空闲" style={{ width: 120 }}>
              <Option value="通话中">通话中</Option>
              <Option value="离线">离线</Option>
              <Option value="繁忙">繁忙</Option>
            </Select>
          </div>
          <div>
            <Button type="primary">登录</Button>
            <Button type="danger">退出</Button>
          </div>
        </div>

        <div>
          <div>
            <Input className="inputstyle" />
            <Button>呼叫</Button>
          </div>
          <div>
            <Input className="inputstyle" />
            <Button>咨询</Button>
            <Button type="danger">咨询取消</Button>
          </div>
          <div>
            <label>咨询类型：</label>
            <Select defaultValue="普通电话" style={{ width: 120 }}>
              <Option value="客户电话">通话中</Option>
              <Option value="骚扰电话">离线</Option>
              <Option value="售后电话">繁忙</Option>
            </Select>
          </div>
          <div>
            <Input className="inputstyle" />
            <Button>转移</Button>
            <label>转移类型：</label>
            <Select defaultValue="普通电话" style={{ width: 120 }}>
              <Option value="客户电话">通话中</Option>
              <Option value="骚扰电话">离线</Option>
              <Option value="售后电话">繁忙</Option>
            </Select>
          </div>
          <div>
            <span>本页面模拟第三方CRM页面</span>
          </div>
        </div>
      </div>
    );
  }
}

const Option = Select.Option;

export default LeftColumn;

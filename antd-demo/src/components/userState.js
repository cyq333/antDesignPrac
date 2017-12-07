import React, { Component } from "react";
import { Menu, Dropdown } from "antd";

import "./userState.css";

class UserState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userState: "离线"
    };
  }

  render() {
    return (
      <div className="statecontainer">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            {this.state.userState}
          </a>
        </Dropdown>
      </div>
    );
  }
}

const onClick = function({ key }) {
  console.log(key);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="在线">在线</Menu.Item>
    <Menu.Item key="离线">离线</Menu.Item>
    <Menu.Item key="置忙">置忙</Menu.Item>
  </Menu>
);

export default UserState;

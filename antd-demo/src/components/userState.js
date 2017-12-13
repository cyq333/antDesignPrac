import React from "react";
import { Select } from "antd";

import "./userState.css";

const Option = Select.Option;

const UserState = () => {
    return (
        <div className="statecontainer">
        <Select defaultValue="离线" style={{ width: 120 }}>
          <Option value="在线">在线</Option>
          <Option value="离线">离线</Option>
          <Option value="置忙">置忙</Option>
        </Select>
      </div>
    )
}

export default UserState;

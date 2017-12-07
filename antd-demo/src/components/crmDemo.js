import React, { Component } from "react";
import UserState from "./userState";
import LeftColumn from "./leftColumn";
import RightColumn from "./rightColumn";

class CRMDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <UserState />
        <div style={{ width: "100%" }}>
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
    );
  }
}

export default CRMDemo;

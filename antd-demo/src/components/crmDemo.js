import React from "react";
import UserState from "./userState";
import LeftColumn from "./leftColumn";
import RightColumn from "./rightColumn";

const CRMDemo = () => {
  return (
    <div>
    <UserState />
    <div style={{ width: "100%" }}>
      <LeftColumn />
      <RightColumn />
    </div>
  </div>
  )
}

export default CRMDemo;

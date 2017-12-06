import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";

class StylePrac extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>按钮</div>
        <Button type="primary">Button</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <div>图标</div>
        <Button type="primary" shape="circle" icon="search" />
        <Button type="primary" icon="search">
          Search
        </Button>
        <Button shape="circle" icon="search" />
        <Button icon="search">Search</Button>
        <br />
        <Button shape="circle" icon="search" />
        <Button icon="search">Search</Button>
        <Button type="dashed" shape="circle" icon="search" />
        <Button type="dashed" icon="search">
          Search
        </Button>
      </div>
    );
  }
}

export default StylePrac;

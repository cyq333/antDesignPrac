import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import "./index.css";
import CRMDemo from "./components/crmDemo";
import StylePrac from "./stylePrac";
import Login from "./components/login";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <HashRouter>
    <div style={{ width: "100%", height: "100%" }}>
      {/* CRMDemo练习 */}
      <Route exact path="/" component={CRMDemo} />
      {/* ant design样式练习 */}
      <Route exact path="/prac" component={StylePrac} />
      <Route exact path="/login" component={Login} />
    </div>
  </HashRouter>,
  document.getElementById("root")
);
registerServiceWorker();

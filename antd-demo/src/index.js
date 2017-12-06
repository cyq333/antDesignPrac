import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from 'react-router-dom';
import "./index.css";
import StylePrac from './stylePrac';
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <HashRouter>
    <div style={{ width: "100%", height: "100%" }}>
      {/* ant design样式练习 */}
      <Route exact path="/" component={StylePrac} />
    </div>
  </HashRouter>,
  document.getElementById("root")
);
registerServiceWorker();

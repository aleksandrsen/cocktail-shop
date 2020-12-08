import React from "react";
import "./index.scss";
import ReactDOM from "react-dom";
import App from "./components/app";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollTop } from "./utils";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {/*<ScrollTop />*/}
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

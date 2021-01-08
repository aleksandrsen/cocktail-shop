import React from "react";
import "./index.scss";
import store from "./store";
import ReactDOM from "react-dom";
import App from "./components/app";
import { ScrollTop } from "./utils";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {/*<ScrollTop />*/}
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

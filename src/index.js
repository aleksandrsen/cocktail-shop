import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app';
import store from "./store"
import {Provider} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom"
import ScrollToTop from "./functions/scroll-to-top"

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ScrollToTop/>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as MemoryRouter } from "react-router-dom";
import AppRouter from "./router";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <MemoryRouter>
      <LocaleProvider locale={zh_CN}>
        <AppRouter />
      </LocaleProvider>
    </MemoryRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

import reportWebVitals from "./reportWebVitals";
import reducers from "./main/reducers";
import Home from "./main/home";

import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(promise, multi, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("app")
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//import reducers from "./store/reducers";
import * as reducers from "./store/reducers";
import "./index.scss";

//const store = createStore(reducers);
const store = createStore(combineReducers(reducers), applyMiddleware(thunk));
// store.dispatch({
//   type: "START_SEARCH",
//   text: "454"
//   // state: {
//   //   phones: [ "iPhone 7 Plus", "Samsung Galaxy A5" ]
//   // }
// });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

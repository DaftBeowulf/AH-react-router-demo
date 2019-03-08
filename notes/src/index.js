import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//import main libraries from r/r-r
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

//import middleware
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

//import reducer
import { notesReducer } from "./reducers";

// create store
const store = createStore(
  notesReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

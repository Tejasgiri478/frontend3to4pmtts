import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from 'redux'
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import reducer from './reducer'
const store=createStore(
  reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  createRoot(document.getElementById("root")).render(
    <Provider store={store}>
     <App />
    </Provider>
  
)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import { NextUIProvider } from "@nextui-org/react";
import darkTheme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <NextUIProvider theme={darkTheme}>
          <App />
        </NextUIProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

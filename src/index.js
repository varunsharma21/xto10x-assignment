import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductInfoProvider from "./ProductInfoProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductInfoProvider>
      <App />
    </ProductInfoProvider>
  </React.StrictMode>
);

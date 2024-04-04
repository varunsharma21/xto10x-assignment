import React from "react";
import styles from "./ProductPage.module.css";
import Navbar from "../components/navbar/Navbar";
import ProductList from "../components/product/ProductList";

function ProductPage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <ProductList />
    </div>
  );
}

export default ProductPage;

import React, { useState, useEffect } from "react";
import context from "./../../store";
import { useContext } from "react";
import styles from "./ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { error, isLoading, products, filters } = useContext(context);

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (filters.length === 0) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => filters.includes(product.category))
      );
    }
  }, [products, filters]);

  return (
    <div className={styles.container}>
      {isLoading && <p className={styles.loading}>Loading...</p>}
      {error && <p className={styles.loading}>Something went wrong!</p>}
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          rating={product.rating}
          reviewsCount={product.reviewsCount}
        />
      ))}
    </div>
  );
};

export default ProductList;

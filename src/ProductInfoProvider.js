import React, { useEffect, useState } from "react";
import context from "./store";

const ProductInfoProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState([]);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw Error("Something went wrong");
      }

      const data = await response.json();

      const transformedData = data.map((product) => {
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          description: product.description,
          category: product.category,
          image: product.image,
          rating: product.rating.rate,
          reviewsCount: product.rating.count,
        };
      });

      setProducts(transformedData);
      setError(null);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const contextInfo = {
    products,
    setProducts,
    isLoading,
    error,
    filters,
    setFilters,
  };

  return (
    <context.Provider value={contextInfo}>{props.children}</context.Provider>
  );
};

export default ProductInfoProvider;

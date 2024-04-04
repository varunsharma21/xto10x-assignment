import React from "react";
import styles from "./ProductCard.module.css";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const { image, title, price, description, category, rating, reviewsCount } =
    props;
  const navigate = useNavigate();

  const productDescription = () => {
    navigate("/description", {
      state: {
        image,
        title,
        price,
        description,
        category,
        rating,
        reviewsCount,
      },
    });
  };

  return (
    <div className={styles.card} onClick={productDescription}>
      <img src={image} alt="" />
      {title.length >= 30 && (
        <p className={styles.title}>{title.slice(0, 30)}...</p>
      )}
      {title.length <= 30 && (
        <p className={styles.title}>{title.slice(0, 30)}</p>
      )}
    </div>
  );
};

export default ProductCard;

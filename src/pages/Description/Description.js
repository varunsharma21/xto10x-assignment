import React from "react";
import styles from "./Description.module.css";
import { useLocation } from "react-router-dom";

const Description = () => {
  const location = useLocation();

  const { state } = location;
  return (
    <div className={styles["desc-page"]}>
      <div className={styles.container}>
        {state && <img src={state.image} alt="poster" />}
        <div className={styles["product-info"]}>
          <p className={styles.title}>{state && state.title}</p>
          <p className={styles.rating}>
            Rating: <span>{state && state.rating}</span> / 5
          </p>
          <p className={styles.desc}>{state && state.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;

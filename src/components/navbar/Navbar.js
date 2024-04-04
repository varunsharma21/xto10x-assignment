import React, { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import context from "../../store";

const Navbar = () => {
  const { setFilters } = useContext(context);

  const [isMenChecked, setIsMenChecked] = useState(false);
  const [isWomenChecked, setIsWomenChecked] = useState(false);
  const [isElectronicsChecked, setIsElectronicsChecked] = useState(false);
  const [isJeweleryChecked, setIsJeweleryChecked] = useState(false);

  const menChangeHandler = () => {
    setIsMenChecked((prevIsMenChecked) => !prevIsMenChecked);
    setFilters((prevFilters) => {
      if (!isMenChecked) {
        return [...prevFilters, "men's clothing"];
      } else {
        return prevFilters.filter((filter) => filter !== "men's clothing");
      }
    });
  };

  const womenChangeHandler = () => {
    setIsWomenChecked((prevIsWomenChecked) => !prevIsWomenChecked);
    setFilters((prevFilters) => {
      if (!isWomenChecked) {
        return [...prevFilters, "women's clothing"];
      } else {
        return prevFilters.filter((filter) => filter !== "women's clothing");
      }
    });
  };

  const electronicsChangeHandler = () => {
    setIsElectronicsChecked(
      (prevIsElectronicsChecked) => !prevIsElectronicsChecked
    );
    setFilters((prevFilters) => {
      if (!isElectronicsChecked) {
        return [...prevFilters, "electronics"];
      } else {
        return prevFilters.filter((filter) => filter !== "electronics");
      }
    });
  };

  const jeweleryChangeHandler = () => {
    setIsJeweleryChecked((prevIsJeweleryChecked) => !prevIsJeweleryChecked);
    setFilters((prevFilters) => {
      if (!isJeweleryChecked) {
        return [...prevFilters, "jewelery"];
      } else {
        return prevFilters.filter((filter) => filter !== "jewelery");
      }
    });
  };

  return (
    <div className={styles.navbar}>
      <p className={styles.brand}>Shopsy.</p>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          id="men"
          checked={isMenChecked}
          onChange={() => menChangeHandler()}
        />
        <label htmlFor="men">Men</label>
      </div>

      <div className={styles.checkbox}>
        <input
          type="checkbox"
          id="women"
          checked={isWomenChecked}
          onChange={() => womenChangeHandler()}
        />
        <label htmlFor="women">Women</label>
      </div>

      <div className={styles.checkbox}>
        <input
          type="checkbox"
          id="electronics"
          checked={isElectronicsChecked}
          onChange={() => electronicsChangeHandler()}
        />
        <label htmlFor="electronics">Electronics</label>
      </div>

      <div className={styles.checkbox}>
        <input
          type="checkbox"
          id="jewelery"
          checked={isJeweleryChecked}
          onChange={() => jeweleryChangeHandler()}
        />
        <label htmlFor="jewelery">Jewelery</label>
      </div>
    </div>
  );
};

export default Navbar;

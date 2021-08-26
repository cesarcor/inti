import React from "react";
import temporary from "../../assets/images/tempimg1.jpg";
import styles from "./product-item.module.scss";

const ProductItem = (props) => {
  return (
    <div className={styles.product_item}>
      <div className={styles.container}>
        <figure className={styles.figure}>
          <img src={temporary} />
        </figure>

        <div className={styles.content}>
          <a href="#">
            <h3>{props.product_name}</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

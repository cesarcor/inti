import React from "react";
import styles from "./button.module.scss";

const Button = (props) => {
  return (
    <a href="#" className={styles.btn}>
      {props.btn_text}
    </a>
  );
};

export default Button;
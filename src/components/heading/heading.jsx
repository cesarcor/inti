import React from "react";
import styles from "./heading.module.scss";

const Heading = (props) => {
  return <h2 className={styles.heading}>{props.text}</h2>;
};

export default Heading;
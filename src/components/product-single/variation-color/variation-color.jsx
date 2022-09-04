import React from 'react';
import styles from './variation-color.module.scss';

const VariationColor = () => {
  return (
    <div className={styles.variation_color}>
      <b>Color</b>
      <div className={styles.variation_container}>
        <button className={styles.variation_btn}>Red</button>
        <button className={styles.variation_btn}>Black</button>
        <button className={styles.variation_btn}>Blue</button>
      </div>
    </div>
  );
};

export default VariationColor;

import React, { useState } from 'react';
import styles from './variation-size.module.scss';

const VariationSize = () => {
  const [width, setWidth] = useState(1);

  const handleSizeChange = (e) => {
    setWidth(e.target.value);
    console.log(width);
  };

  return (
    <div className={styles.variation_width}>
      <b>Width</b>
      <div className={styles.variation_container}>
        <button
          className={styles.variation_btn}
          value='Small'
          onClick={handleSizeChange}
        >
          SM
        </button>
        <button
          className={styles.variation_btn}
          value='Medium'
          onClick={handleSizeChange}
        >
          MD
        </button>
        <button
          className={styles.variation_btn}
          value='Large'
          onClick={handleSizeChange}
        >
          L
        </button>
      </div>
    </div>
  );
};

export default VariationSize;

import React from 'react';
import styles from './product-grid.module.scss';

const ProductGrid = ({ children }) => {
  return <div className={styles.product_grid}>{children}</div>;
};

export default ProductGrid;

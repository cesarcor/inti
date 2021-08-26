import React from 'react';
import styles from './product-list.module.scss';
import ProductItem from '../product-item/product-item';

const ProductList = () => {
    return (
        <div className={styles.product_list}>
            <ProductItem product_name='Large plant pot'/>
            <ProductItem product_name='Large plant pot'/>
            <ProductItem product_name='Large plant pot'/>
            <ProductItem product_name='Large plant pot'/>
        </div>
    )
}

export default ProductList;
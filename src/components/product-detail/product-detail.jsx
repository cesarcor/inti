import React from 'react';
import '../../global-styles.scss';
import styles from './product-detail.module.scss';
import heroImg from '../../assets/images/tempimg1.jpg';
import VariationColor from '../variation-color/variation-color';
import VariationWidth from '../variation-size/variation-size';
import AddToCart from '../add-to-cart/add-to-cart';

const ProductDetail = () => {
  return (
    <div className={styles.product_detail}>
      <div className={styles.product_detail__img}>
        <figure>
          <img src={heroImg} alt='product-detail' />
        </figure>
      </div>
      <div className={styles.product_detail__content}>
        <div className={styles.container}>
          <div className={styles.product_title_container}>
            <h1>Massive Pot</h1>
          </div>
          <div className={styles.product_description_container}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              finibus eros eu dapibus posuere. Aliquam erat volutpat. Phasellus
              mattis orci a risus mollis venenatis. Suspendisse efficitur
              gravida nisi quis imperdiet. Donec tristique nec augue ut porta.
            </p>
          </div>
          <div className={styles.product_variables_container}>
            <VariationColor />
            <VariationWidth />
          </div>
          <div className={styles.add_to_cart_container}>
            <AddToCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './related-products.module.scss';
import Heading from '../heading/heading';
import ProductItem from '../product-item/product-item';

const RelatedProducts = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 6000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Heading text='Related Products' />
      <Carousel
        responsive={responsive}
        itemClass={styles.product_carousel__item}
      >
        <ProductItem product_name='Lorem Ipsum' price='399' />
        <ProductItem product_name='Lorem Ipsum' price='399' />
        <ProductItem
          product_name='Lorem Ipsum'
          price='399'
          discount_badge_type='small'
        />
        <ProductItem product_name='Lorem Ipsum' price='399' />
        <ProductItem product_name='Lorem Ipsum' price='399' />
        <ProductItem product_name='Lorem Ipsum' price='399' />
        <ProductItem product_name='Lorem Ipsum' price='399' />
        <ProductItem product_name='Lorem Ipsum' price='399' />
      </Carousel>
    </div>
  );
};

export default RelatedProducts;
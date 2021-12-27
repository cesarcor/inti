import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './product-carousel.module.scss';
import ProductItem from '../product-item/product-item';

const ProductCarousel = () => {
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
      <Carousel
        responsive={responsive}
        itemClass={styles.product_carousel__item}
      >
        <ProductItem product_name='Lorem Ipsum' price='399' />
        <ProductItem product_name='Lorem Ipsum' price='399' />
        <ProductItem product_name='Lorem Ipsum' price='399' />
        <ProductItem product_name='Lorem Ipsum' price='399' />
        <ProductItem product_name='Lorem Ipsum' price='399' />
        <ProductItem product_name='Lorem Ipsum' price='399' />
        <ProductItem product_name='Lorem Ipsum' price='399' />
        <ProductItem product_name='Lorem Ipsum' price='399' />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;

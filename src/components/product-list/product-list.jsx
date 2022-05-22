import React from 'react';
import ProductGrid from '../product-grid/product-grid';
import ProductItem from '../product-item/product-item';

const ProductList = () => {
  return (
    <ProductGrid>
      <ProductItem product_name='Large plant pot' discount_badge_type='big' />
      <ProductItem product_name='Large plant pot' discount_badge_type='big' />
      <ProductItem product_name='Large plant pot' />
      <ProductItem product_name='Large plant pot' />
    </ProductGrid>
  );
};

export default ProductList;

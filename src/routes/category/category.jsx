import React from 'react';
import Layout from '../../components/layout/layout';
import Section from '../../components/section/section';
import Heading from '../../components/heading/heading';
import ProductGrid from '../../components/product-grid/product-grid';
import ProductItem from '../../components/product-item/product-item';

const Category = () => {
  return (
    <Layout>
      <Section section_type='site_section_1024'>
        <Heading text='Category' />
        <ProductGrid>
          <ProductItem product_name='Lorem Ipsum' price='399' />
          <ProductItem product_name='Lorem Ipsum' price='399' />
          <ProductItem product_name='Lorem Ipsum' price='399' />
          <ProductItem product_name='Lorem Ipsum' price='399' />
          <ProductItem product_name='Lorem Ipsum' price='399' />
        </ProductGrid>
      </Section>
    </Layout>
  );
};

export default Category;

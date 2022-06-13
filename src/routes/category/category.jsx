import React from 'react';
import Layout from '../../components/layout/layout';
import Section from '../../components/section/section';
import Heading from '../../components/heading/heading';
import ProductGrid from '../../components/product-grid/product-grid';
import ProductItem from '../../components/product-item/product-item';
import { useParams } from 'react-router-dom';
import { param_to_readable } from '../../utils/param-to-readable';
import styles from './category.module.scss';

const Category = () => {
	const { catid } = useParams();
	return (
		<Layout>
			<Section section_type='site_section_1024'>
				<Heading text={param_to_readable(catid)} />
				<p className={styles.category_description}>
					lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
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

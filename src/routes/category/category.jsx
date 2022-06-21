import React from 'react';
import Layout from '../../components/layout/layout';
import Section from '../../components/section/section';
import Heading from '../../components/heading/heading';
import ProductGrid from '../../components/product-grid/product-grid';
import ProductItem from '../../components/product-item/product-item';
import products from '../../data/products.json';
import { useParams } from 'react-router-dom';
import { param_to_readable } from '../../utils/param-to-readable';
import styles from './category.module.scss';

const Category = () => {
	const { catid } = useParams();
	const category_param = param_to_readable(catid);

	return (
		<Layout>
			<Section section_type='site_section_1024'>
				<Heading text={category_param} />
				<p className={styles.category_description}>
					lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
				<ProductGrid>
					{products.map((product) => {
						if (product.category === catid) {
							return (
								<ProductItem
									key={product.id}
									param_name={product.param_name}
									product_name={product.name}
									price={product.price}
								/>
							);
						}
					})}
				</ProductGrid>
			</Section>
		</Layout>
	);
};

export default Category;

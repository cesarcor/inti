import React from 'react';
import styles from './single-product.module.scss';
import Layout from '../../components/layout/layout';
import ProductDetail from '../../components/product-detail/product-detail';
import ProductOverview from '../../components/product-overview/product-overview';
import RelatedProducts from '../../components/related-products/related-products';
import Section from '../../components/section/section';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
	const { prodid } = useParams();
	return (
		<Layout>
			<Section section_type='site_section_1200'>
				<ProductDetail product_id={prodid} />
			</Section>
			<Section section_type='site_section_1024'>
				<ProductOverview />
			</Section>
			<Section section_type='site_section_1024'>
				<RelatedProducts />
			</Section>
		</Layout>
	);
};

export default SingleProduct;

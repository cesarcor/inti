import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './related-products.module.scss';
import Heading from '../../misc-comps/heading/heading';
import ProductItem from '../../product-listing/product-item/product-item';
import products from '../../../data/products.json';

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
				{products.map((product) => {
					return (
						<ProductItem
							key={product.id}
							param_name={product.param_name}
							product_name={product.name}
							price={product.price}
						/>
					);
				})}
			</Carousel>
		</div>
	);
};

export default RelatedProducts;

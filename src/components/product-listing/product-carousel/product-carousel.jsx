import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './product-carousel.module.scss';
import ProductItem from '../../product-listing/product-item/product-item';
import products from '../../../data/products.json';

const ProductCarousel = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 6000, min: 1024 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1024, min: 500 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 500, min: 0 },
			items: 1,
		},
	};

	return (
		<>
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
							discount_badge_type='big'
							discount={product.discount}
							price={product.price}
						/>
					);
				})}
			</Carousel>
		</>
	);
};

export default ProductCarousel;

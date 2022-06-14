import React from 'react';
import temporary from '../../assets/images/tempimg2.jpg';
import styles from './product-item.module.scss';
import DiscountBadge from '../discount-badge/discount-badge';

const ProductItem = (props) => {
	return (
		<div
			className={
				props.price
					? `${styles.product_item} ${styles.product_item_complete}`
					: `${styles.product_item} ${styles.product_item_simplified}`
			}
		>
			<a href='#'>
				<div className={styles.container}>
					{props.discount && (
						<DiscountBadge
							discount_badge_type={props.discount_badge_type}
							discount={props.discount}
						/>
					)}
					<figure className={styles.figure}>
						<img src={temporary} />
					</figure>

					<div className={styles.content}>
						<h3>{props.product_name}</h3>
						{props.price && props.price}
					</div>
				</div>
			</a>
		</div>
	);
};

export default ProductItem;

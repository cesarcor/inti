import React from 'react';
import styles from './cart-item.module.scss';

const CartItem = (props) => {
	return (
		<article className={styles.cart_item}>
			<figure className={styles.cart_item__fig}>
				<img src='https://via.placeholder.com/150' alt='' />
			</figure>
			<div className={styles.cart_item__info}>
				<h3 className={styles.item_info_title}>{props.name}</h3>
				<p className={styles.item_info_description}>
					Lorem ipsum doloret et min delarus concabit fora
				</p>
				<span className={styles.item_info_price}>{props.price}</span>
			</div>
		</article>
	);
};

export default CartItem;

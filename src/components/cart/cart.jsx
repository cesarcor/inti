import { React, Fragment, useState } from 'react';
import styles from './cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleCart = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Fragment>
			{' '}
			<span className={styles.cart_btn} onClick={toggleCart}>
				<FontAwesomeIcon icon={faShoppingBag} />
				<span className={styles.cart_number}>2</span>
			</span>
			{isOpen && <CartPanel toggleCart={toggleCart} />}
		</Fragment>
	);
};

export default Cart;

const CartPanel = (props) => {
	return (
		<div className={styles.cart_panel}>
			<div className={styles.cart_panel__header}>
				<button className={styles.close_btn} onClick={props.toggleCart}>
					X Close
				</button>
			</div>
			<div className={styles.cart_panel__list}>
				<article className={styles.cart_item}>
					<figure className={styles.cart_item__fig}>
						<img src='https://via.placeholder.com/150' alt='' />
					</figure>
					<div className={styles.cart_item__info}>
						<h3 className={styles.item_info_title}>Product Name</h3>
						<p className={styles.item_info_description}>
							Lorem ipsum doloret et min delarus concabit fora
						</p>
						<span className={styles.item_info_price}>$100</span>
					</div>
				</article>
				<article className={styles.cart_item}>
					<figure className={styles.cart_item__fig}>
						<img src='https://via.placeholder.com/150' alt='' />
					</figure>
					<div className={styles.cart_item__info}>
						<h3 className={styles.item_info_title}>Product Name</h3>
						<p className={styles.item_info_description}>
							Lorem ipsum doloret et min delarus concabit fora
						</p>
						<span className={styles.item_info_price}>$100</span>
					</div>
				</article>
			</div>
		</div>
	);
};

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
					<div className={styles.cart_item__image}>
						<img src='https://via.placeholder.com/150' alt='' />
					</div>
					<div className={styles.cart_item__info}>
						<h3>Product Name</h3>
						<p>$100</p>
					</div>
				</article>
				<article className={styles.cart_item}>
					<div className={styles.cart_item__image}>
						<img src='https://via.placeholder.com/150' alt='' />
					</div>
					<div className={styles.cart_item__info}>
						<h3>Product Name</h3>
						<p>$100</p>
					</div>
				</article>
			</div>
		</div>
	);
};

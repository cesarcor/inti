import { React, Fragment, useState } from 'react';
import styles from './cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import CartItem from '../cart-item/cart-item';

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
				<CartItem />
				<CartItem />
			</div>
		</div>
	);
};

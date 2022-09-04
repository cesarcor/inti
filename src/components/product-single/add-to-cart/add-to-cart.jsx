import React, { useState } from 'react';
import styles from './add-to-cart.module.scss';

const AddToCart = () => {
	const [quantity, setQuantity] = useState(1);

	const handleQuantityIncrement = () => {
		setQuantity(quantity + 1);
	};

	const handleQuantityDecrement = () => {
		if (quantity !== 1) {
			setQuantity(quantity - 1);
		}
	};

	const saveToCart = () => {
		localStorage.setItem('product-param', JSON.stringify('acme-hanging-pot'));
	};

	return (
		<div className={styles.add_to_cart}>
			<div className={styles.add_to_cart__col}>
				<div className={styles.number_input}>
					<button
						className={styles.number_input__decrement}
						onClick={handleQuantityDecrement}
					>
						-
					</button>
					<input
						type='text'
						className={styles.number_input__value}
						value={quantity}
					/>
					<button
						className={styles.number_input__increment}
						onClick={handleQuantityIncrement}
					>
						+
					</button>
				</div>
			</div>
			<div className={styles.add_to_cart__col}>
				<div>
					<span>Total: </span>
					<span>$129.99</span>
				</div>
			</div>
			<div className={styles.add_to_cart__col}>
				<button className={styles.add_to_cart_btn} onClick={saveToCart}>
					Add To Cart
				</button>
			</div>
		</div>
	);
};

export default AddToCart;

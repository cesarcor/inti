import React from 'react';
import styles from './discount-badge.module.scss';

const DiscountBadge = (props) => {
	return (
		<div
			className={
				props.discount_badge_type === 'big'
					? `${styles.discount_badge_big} ${styles.discount_badge}`
					: `${styles.discount_badge_small} ${styles.discount_badge}`
			}
		>
			<span className={styles.discount_badge__content}>
				<span className={styles.discount_badge__amount}>
					{props.discount + '%'}
				</span>
				<span className={styles.discount_badge__title}>discount</span>
			</span>
		</div>
	);
};

export default DiscountBadge;

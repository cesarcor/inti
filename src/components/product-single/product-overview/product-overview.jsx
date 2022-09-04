import React from 'react';
import styles from './product-overview.module.scss';
import Heading from '../../misc-comps/heading/heading';
import heroImg from '../../../assets/images/tempimg1.jpg';

const ProductOverview = () => {
	return (
		<div>
			<Heading text='Product Overview' />
			<div className={styles.product_overview_content}>
				<div className={styles.product_overview_description}>
					<p>Lorem ipsum doefk ef gekrj ger gjnr gre gnr gj gkjwgk3 rj</p>
				</div>
				<div className={styles.product_overview_img}>
					<figure>
						<img src={heroImg} alt='product' />
					</figure>
				</div>
			</div>
		</div>
	);
};

export default ProductOverview;

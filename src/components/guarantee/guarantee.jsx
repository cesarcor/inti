import React from 'react';
import Heading from '../../components/heading/heading';
import styles from './guarantee.module.scss';
import tempimg2 from '../../assets/images/tempimg2.jpg';
import tempimg3 from '../../assets/images/tempimg3.jpg';
import tempimg4 from '../../assets/images/tempimg4.jpg';

const Guarantee = () => {
	return (
		<div className={styles.guarantee}>
			<div className={styles.guarantee__images}>
				<figure className={styles.figure}>
					<img src={tempimg2} className={styles.guarantee_image} />
				</figure>
				<figure className={styles.figure}>
					<img src={tempimg3} className={styles.guarantee_image} />
				</figure>
				<figure className={styles.figure}>
					<img src={tempimg4} className={styles.guarantee_image} />
				</figure>
			</div>
			<div className={styles.guarantee__text}>
				<Heading text='Our Guarantees' />
				<p>
					Lorem ipsum doloret et min delaru r gjjr congiani de la musa funcione
					maputo johanesburg kampala addis abababa.
				</p>
				<ul className={styles.guarantee_list}>
					<li>Guarantee 1</li>
					<li>Guarantee 1</li>
					<li>Guarantee 1</li>
					<li>Guarantee 1</li>
				</ul>
			</div>
		</div>
	);
};

export default Guarantee;

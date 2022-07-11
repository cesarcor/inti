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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue
					orci, tempus a laoreet a, facilisis vel nisi. Quisque ultrices maximus
					ex, at dignissim lacus aliquet sit amet.
				</p>
				<ul className={styles.guarantee_list}>
					<li className={styles.guarantee_list__item}>
						<span className={styles.guarantee_check}>✓</span>{' '}
						<span>Laoreet a, facilisis vel nisi.</span>
					</li>
					<li className={styles.guarantee_list__item}>
						<span className={styles.guarantee_check}>✓</span>{' '}
						<span>liquam augue orci, tempus a laoreet a</span>
					</li>
					<li className={styles.guarantee_list__item}>
						<span className={styles.guarantee_check}>✓</span>{' '}
						<span>Quisque ultrices maximus ex</span>
					</li>
					<li className={styles.guarantee_list__item}>
						<span className={styles.guarantee_check}>✓</span>{' '}
						<span>at dignissim lacus aliquet sit amet</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Guarantee;

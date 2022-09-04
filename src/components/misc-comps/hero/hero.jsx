import React from 'react';
import styles from './hero.module.scss';
import heroImg from '../../../assets/images/tempimg1.jpg';
import Button from '../button/button';

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.hero_content_col}>
				<div className={styles.content_container}>
					<h1>Mega Planters</h1>
					<p>
						Lorem ipsum dolor sit amet, consetur sapipang individunt pakisan
					</p>
					<Button btn_text='Shop Now' />
				</div>
			</div>
			<div className={styles.hero_image_col}>
				<figure>
					<img src={heroImg} className={styles.hero_img} />
				</figure>
			</div>
		</div>
	);
};

export default Hero;

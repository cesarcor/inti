import React from 'react';
import styles from './button.module.scss';
import { ReactComponent as BrownUnderline } from '../../../assets/svg/brown-underline.svg';

const Button = (props) => {
	return (
		<a href='#' className={styles.btn}>
			<span>{props.btn_text}</span>
			<span>
				<BrownUnderline />
			</span>
		</a>
	);
};

export default Button;

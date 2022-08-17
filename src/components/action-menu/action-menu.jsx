import React from 'react';
import { Link } from 'react-router-dom';
import styles from './action-menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import Cart from '../cart/cart';

const ActionMenu = () => {
	return (
		<div className={styles.action_menu}>
			<ul className={styles.action_menu__list}>
				<li>
					<Link to='/login'>
						<FontAwesomeIcon icon={faUserCircle} />
					</Link>
				</li>
				<li>
					<a href='#'>
						<FontAwesomeIcon icon={faHeart} />
					</a>
				</li>
				<li>
					<Cart />
				</li>
			</ul>
		</div>
	);
};

export default ActionMenu;

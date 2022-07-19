import React from 'react';
import styles from './action-menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUserCircle,
	faHeart,
	faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';
import Cart from '../cart/cart';

const ActionMenu = () => {
	return (
		<div className={styles.action_menu}>
			<ul className={styles.action_menu__list}>
				<li>
					<a href='#'>
						<FontAwesomeIcon icon={faUserCircle} />
					</a>
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

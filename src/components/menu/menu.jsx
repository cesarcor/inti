import React from 'react';
import styles from './menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<nav className={styles.site_menu}>
			<ul className={styles.site_menu__list}>
				<li>
					<Link to='/category/flower-pot'>Flower Pot</Link>
				</li>
				<li>
					<Link to='/category/planter'>Planter</Link>
				</li>
				<li>
					<Link to='/category/pillars'>Pillars</Link>
				</li>
				<li>
					<Link to='/category/silk-flowers'>Silk Flowers</Link>
				</li>
			</ul>
			<button className={styles.burger_menu}>
				<span>Menu</span>
				<FontAwesomeIcon icon={faBars} />
			</button>
		</nav>
	);
};

export default Menu;

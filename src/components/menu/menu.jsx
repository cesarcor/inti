import React from 'react';
import styles from './menu.module.scss';

const Menu = () => {
    return (
        <nav className={styles.site_menu}>
            <ul className={styles.site_menu__list}>
                <li><a href="#">Flower Pot</a></li>
                <li><a href="#">Planter</a></li>
                <li><a href="#">Pillars</a></li>
                <li><a href="#">Silk Flowers</a></li>
            </ul>
            <button className={styles.burger_menu}>Menu</button>
        </nav>
    )
}

export default Menu;

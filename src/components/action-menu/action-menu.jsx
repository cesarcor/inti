import React from 'react';
import styles from './action-menu.module.scss';

const ActionMenu = () => {
    return (
        <div className={styles.action_menu}>
          <ul className={styles.action_menu__list}>
            <li><a href="#">A</a></li>
            <li><a href="#">W</a></li>
            <li><a href="#">C</a></li>
          </ul>  
        </div>
    )
}

export default ActionMenu;
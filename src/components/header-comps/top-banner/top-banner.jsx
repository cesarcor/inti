import React from 'react';
import styles from './top-banner.module.scss';

const TopBanner = () => {
    return (
        <div className={styles.top_bar}>
            <span className={styles.top_bar__text}>Orders above $75 get free shipping</span>
        </div>
    )
}

export default TopBanner; 

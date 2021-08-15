import React from 'react';
import styles from './top-banner.module.scss';

const TopBanner = () => {
    return (
        <div className={styles.top_bar}>
            <span>Orders above $75 get free shipping</span>
        </div>
    )
}

export default TopBanner;

import React from 'react';
import styles from './layout.module.scss';

const Layout = ({children}) => {
    return (
        <main className={styles.main_container}>
            {children}
        </main>
    )
}

export default Layout;
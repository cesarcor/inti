import React from 'react';
import styles from './layout.module.scss';

const Layout = ({children}) => {
    return (
        <div className="app-container">
            {children}
        </div>
    )
}

export default Layout;
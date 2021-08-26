import React from 'react';
import styles from './header.module.scss';
import SearchForm from '../search-form/search-form';
import Menu from '../menu/menu';
import ActionMenu from '../action-menu/action-menu';

const Header = () => {
  return (
    <header className={styles.site_header}>
      <div className={styles.upper_site_header}>
        <div className={styles.container}>
          <div className={styles.header_form_col}>
            <SearchForm />
          </div>
          <div className={styles.logo_col}>LOGO</div>
          <div className={styles.action_menu_col}>
            <ActionMenu />
          </div>
        </div>
      </div>
      <div className={styles.lower_site_header}>
        <div className={styles.container}>
          <div className={styles.header_form_col}>
            <SearchForm />
          </div>
          <div className={styles.menu_col}>
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

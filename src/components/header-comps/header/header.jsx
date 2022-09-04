import { React, Fragment } from 'react';
import styles from './header.module.scss';
import SearchForm from '../../forms/search-form/search-form';
import Menu from '../menu/menu';
import ActionMenu from '../action-menu/action-menu';
import TopBanner from '../top-banner/top-banner';

const Header = () => {
	return (
		<Fragment>
			<TopBanner />
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
		</Fragment>
	);
};

export default Header;

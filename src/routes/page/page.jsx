import { React, Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header-comps/header/header';
import Footer from '../../components/footer-comps/footer/footer';

const Page = () => {
	return (
		<Fragment>
			<Header />
			<Outlet />
			<Footer />
		</Fragment>
	);
};

export default Page;

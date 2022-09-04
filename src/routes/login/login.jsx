import React from 'react';
import Layout from '../../components/layout-comps/layout/layout';
import Section from '../../components/layout-comps/section/section';
import Heading from '../../components/misc-comps/heading/heading';
import LoginForm from '../../components/forms/login-form/login-form';

const Login = () => {
	return (
		<Layout>
			<Section section_type='site_section_1024'>
				<Heading text='Login' />
				<LoginForm />
			</Section>
		</Layout>
	);
};

export default Login;

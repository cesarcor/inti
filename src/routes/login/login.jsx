import React from 'react';
import Layout from '../../components/layout/layout';
import Section from '../../components/section/section';
import Heading from '../../components/heading/heading';
import LoginForm from '../../components/login-form/login-form';

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

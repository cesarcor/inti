import { React, Fragment } from 'react';
import '../../global-styles.scss';
import Layout from '../../components/layout/layout';
import Hero from '../../components/hero/hero';
import ProductList from '../../components/product-list/product-list';
import Heading from '../../components/heading/heading';
import Section from '../../components/section/section';
import Guarantee from '../../components/guarantee/guarantee';
import ProductCarousel from '../../components/product-carousel/product-carousel';

function Home() {
	return (
		<Layout>
			<Section section_type='site_section_1200'>
				<Hero />
			</Section>

			<Section section_type='site_section_1024'>
				<ProductList />
			</Section>

			<Section section_type='site_section_1024'>
				<Guarantee />
			</Section>

			<Section section_type='site_section_1024'>
				<Heading text='Our Runners' />
				<ProductCarousel />
			</Section>
		</Layout>
	);
}

export default Home;

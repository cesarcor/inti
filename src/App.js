import React from "react";
import "./global-styles.scss";
import Layout from "./components/layout/layout";
import TopBanner from "./components/top-banner/top-banner";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import ProductList from "./components/product-list/product-list";
import Heading from "./components/heading/heading";
import Section from "./components/section/section";
import ProductCarousel from "./components/product-carousel/product-carousel";

function App() {
  return (
    <div className="site">
      <TopBanner />
      <Header />
      <Layout>
        <Section section_type="site_section_1200">
          <Hero />
        </Section>

        <Section section_type="site_section_1024">
          <ProductList />
        </Section>

        <Section section_type="site_section_1024">
          <Heading text="Our Runners" />
          <ProductCarousel />
        </Section>
      </Layout>
    </div>
  );
}

export default App;

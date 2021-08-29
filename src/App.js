import "./global-styles.scss";
import Layout from "./components/layout/layout";
import TopBanner from "./components/top-banner/top-banner";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import ProductList from "./components/product-list/product-list";
import Heading from "./components/heading/heading";

function App() {
  return (
    <div className="site">
      <TopBanner />
      <Header />
      <Layout>
        <Hero />
        <div className="below_fold_container">
          <ProductList />
          <Heading text="Our Runners" />
        </div>
      </Layout>
    </div>
  );
}

export default App;
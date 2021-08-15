import './global-styles.scss';
import Layout from './components/layout/layout';
import TopBanner from './components/top-banner/top-banner';
import Header from './components/header/header';


function App() {
  return (
    <div className="site">
      <TopBanner />
      <Header />
      <Layout>
      </Layout>
    </div>
  );
}

export default App;
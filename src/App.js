import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page from './routes/page/page';
import Home from './routes/home/home.jsx';
import Login from './routes/login/login';
import Category from './routes/category/category';
import SingleProduct from './routes/single-product/single-product.jsx';
import ScrollToTop from './utils/scroll-to-top';

function App() {
	return (
		<ScrollToTop>
			<Routes>
				<Route path='/' element={<Page />}>
					<Route index element={<Home />} />
					<Route path='/category/:catid' element={<Category />} />
					<Route path='/product/:prodid' element={<SingleProduct />} />
					<Route path='/login' element={<Login />} />
				</Route>
			</Routes>
		</ScrollToTop>
	);
}

export default App;

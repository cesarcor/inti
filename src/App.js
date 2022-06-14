import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page from './routes/page/page';
import Home from './routes/home/home.jsx';
import Category from './routes/category/category';
import SingleProduct from './routes/single-product/single-product.jsx';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Page />}>
				<Route index element={<Home />} />
				<Route path='/category/:catid' element={<Category />} />
				<Route path='/product/:prodid' element={<SingleProduct />} />
			</Route>
		</Routes>
	);
}

export default App;

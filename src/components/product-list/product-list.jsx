import React from 'react';
import ProductGrid from '../product-grid/product-grid';
import ProductItem from '../product-item/product-item';
import products from '../../data/products.json';

const ProductList = () => {
	return (
		<ProductGrid>
			{products.map((product) => {
				if (product.featured) {
					return (
						<ProductItem
							key={product.id}
							param_name={product.param_name}
							product_name={product.name}
							discount_badge_type='big'
							discount={product.discount}
						/>
					);
				}
			})}
		</ProductGrid>
	);
};

export default ProductList;

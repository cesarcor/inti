import React, { useState } from 'react';
import { excerpt } from '../../utils/excerpt';
import styles from './search-form.module.scss';
import temporary from '../../assets/images/tempimg2.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PRODUCTS from '../../data/products.json';

const SearchForm = () => {
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<>
			<div className={styles.search_form}>
				<input
					type='text'
					placeholder='what are you looking for?'
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<button type='submit' className={styles.submit_btn}>
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</div>
			<div className={styles.search_list_container}>
				<ul className={styles.search_list}>
					{PRODUCTS.filter((product) => {
						if (searchTerm === '') {
							return;
						} else if (
							product.name
								.toLocaleLowerCase()
								.includes(searchTerm.toLocaleLowerCase())
						) {
							return product;
						}
					}).map((product, key) => {
						return (
							<li className={styles.search_list__item} key={key}>
								<Link to='/'>
									<article className={styles.search_item}>
										<figure className={styles.search_item__fig}>
											<img src={temporary} />
										</figure>
										<div className={styles.search_item__content}>
											<h3>{product.name}</h3>
											<p>{excerpt(product.description, 45)}</p>
											<b>{product.price}</b>
										</div>
									</article>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default SearchForm;

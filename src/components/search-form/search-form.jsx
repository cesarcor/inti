import React from 'react';
import styles from './search-form.module.scss';

const SearchForm = () => {
    return (
        <form className={styles.search_form}>
            <input type="text" placeholder="what are you looking for?" />
        </form>
    )
}

export default SearchForm;
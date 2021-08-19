import React from 'react';
import styles from './search-form.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchForm = () => {
    return (
        <form className={styles.search_form}>
            <input type="text" placeholder="what are you looking for?" />
            <button type="submit" className={styles.submit_btn}><FontAwesomeIcon icon={faSearch} /></button>
        </form>
    )
}

export default SearchForm;
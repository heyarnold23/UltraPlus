import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Search.module.css'

export default function Search() {

    // const [searchInput, setSearchInput] = useState();
    const [searchResults, setSearchResults] = useState();

    const sendSearch = (e) => {
        console.log(e.target.value);
        const searchInput = e.target.value;

        // assign to variable: await dispatch thunk action for searching
        // console.log the variable

    }

    return (
        <>
            <div id={styles.page}>
                <div id={styles.midContainer}>
                    <div id={styles.searchDiv}>
                        <form action="/search" method="get">
                            <input
                                type="search"
                                name="searchVal"
                                id="searchBar"
                                placeholder="Search by title..."
                                onChange={sendSearch}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

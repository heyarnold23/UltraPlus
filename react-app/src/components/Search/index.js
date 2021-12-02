import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedShowsThunk } from '../../store/shows';

import styles from './Search.module.css'

export default function Search() {
    const dispatch = useDispatch();
    const [showNone, setShowNone] = useState(true);
    const [searchResults, setSearchResults] = useState();

    const sendSearch = async (e) => {
        const searchInput = e.target.value;

        const results = await dispatch(getSearchedShowsThunk(searchInput));

        if (!results) {
            setShowNone(true)
            return
        }

        const arrOfResults = Object.values(results);

        if (!arrOfResults.length || !arrOfResults) {
            setShowNone(true)
        } else{
            setShowNone(false)
            setSearchResults(results)
        }

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
                    {showNone ?
                    <div>NONE</div>
                    :
                    <div>SHOWS</div>
                }
                    {/* put another div here for a shows container */}
                    {/* refer to the filtered thing from the main shows page */}
                </div>
            </div>
        </>
    );
}

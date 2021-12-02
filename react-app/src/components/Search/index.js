import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedShowsThunk } from '../../store/shows';
import { NavLink } from 'react-router-dom';

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
            await setShowNone(true)
        } else{
            await setShowNone(false)
            setSearchResults(arrOfResults)
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
                    {(showNone || !searchResults) ?
                    <div>NONE</div>
                    :
                    <div id={styles.showContainer}>
                        {searchResults?.map((show) => {
                            return (
                                <NavLink key={show.id} to={`/shows/${show.id}`}>
                                    <div id={styles.showImage} style={{ backgroundImage: `url(${show.thumbnail_url})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
                                </NavLink>
                            )
                        })}
                    </div>
                }
                    {/* put another div here for a shows container */}
                    {/* refer to the filtered thing from the main shows page */}
                </div>
            </div>
        </>
    );
}

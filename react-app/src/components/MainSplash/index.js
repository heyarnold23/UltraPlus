import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import styles from './MainSplash.module.css'
import { getShowsThunk } from '../../store/shows';
import { NavLink } from 'react-router-dom';


export default function MainSplash() {
    const dispatch = useDispatch();

    // dispatch for shows
    useEffect(() => {
        dispatch(getShowsThunk())
    }, [dispatch])

    const showsObj = useSelector(state => state?.shows)
    const showsArr = Object.values(showsObj)
    console.log('shows in MAINSPLASH', showsArr);
    // const profileId = localStorage.getItem('profile')
    // console.log(profileId);

    return (
        <div id={styles.page}>
            <div id={styles.carousel}>
                PLACEHOLDER
            </div>
            <div id={styles.studiosContainer}>
                studios placeholder
            </div>
            <div id={styles.showContainer}>
                {/* map out the shows object */}
                {showsArr.map((show) => {
                    return (
                            <NavLink key={show.id} to={`/shows/${show.id}`}>
                                <div id={styles.showImage} style={{ backgroundImage: `url(${show.thumbnail_url})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
                            </NavLink>
                    )
                })}
            </div>
        </div>
    );
}

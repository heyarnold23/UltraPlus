import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import styles from './ShowPage.module.css'
import { getShowsThunk } from '../../store/shows';


export default function ShowPage() {
    const dispatch = useDispatch();

    // dispatch for shows
    useEffect(() => {
        dispatch(getShowsThunk())
    }, [dispatch])

    // const showsObj = useSelector(state => state?.shows)
    // const showsArr = Object.values(showsObj)
    // console.log('shows in MAINSPLASH',showsArr);
    // const profileId = localStorage.getItem('profile')
    // console.log(profileId);

    return (
        <div id={styles.page}>
            <div id={styles.titlePicDiv}>
                TitlePic
            </div>
            <div id={styles.yearGenreDiv}>
                <div id={styles.year}>year</div>
                <div id={styles.genre}>genres</div>
            </div>
            <div id={styles.playAddDiv}>
                <button id={styles.playButton}>PLAY</button>
                <button id={styles.addButton}>+</button>
            </div>
            <div id={styles.showDetailsDiv}>
                Show Details
            </div>
        </div>
    );
}

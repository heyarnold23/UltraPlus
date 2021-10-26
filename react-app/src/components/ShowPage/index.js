import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import styles from './ShowPage.module.css'
import { getOneShowThunk } from '../../store/shows';
import { useParams } from 'react-router-dom';


export default function ShowPage() {
    const dispatch = useDispatch();
    const {id} = useParams()
    const showObj = useSelector(state => state?.shows)
    console.log("This is show object", showObj);

    // dispatch for shows
    useEffect(() => {
        dispatch(getOneShowThunk(id))
    }, [dispatch, id])

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

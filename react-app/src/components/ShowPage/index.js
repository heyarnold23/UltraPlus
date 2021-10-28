import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import styles from './ShowPage.module.css'
import { getOneShowThunk } from '../../store/shows';
import { NavLink, useParams } from 'react-router-dom';
import { addModal, toggleModalView, passData } from '../../store/session';
import FormModal from '../Modal';
import { MdAddCircle } from 'react-icons/md';

export default function ShowPage() {
    const dispatch = useDispatch();
    const { id } = useParams()
    const modalView = useSelector(state => state?.session?.modalView)

    // dispatch for shows
    useEffect(() => {
        dispatch(getOneShowThunk(id))
    }, [dispatch, id])
    const show = useSelector(state => state?.shows)

    const addShowModal = (e) => {
        e.preventDefault()
        const data = {
            id: id
        }
        dispatch(addModal("addShow"))
        dispatch(toggleModalView(true))
        dispatch(passData(data))
    }
    // const showsObj = useSelector(state => state?.shows)
    // const showsArr = Object.values(showsObj)
    // console.log('shows in MAINSPLASH',showsArr);
    // const profileId = localStorage.getItem('profile')
    // console.log(profileId);

    return (
        <>
            <div id={styles.page} style={{ backgroundImage: `url(${show?.background_art_url})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
                <div id={styles.test}>
                    <div id={styles.showInfoDiv}>
                        <div id={styles.titlePicDiv} style={{ backgroundImage: `url(${show?.title_pic_url})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        </div>
                        <div id={styles.yearGenreDiv}>
                            <div id={styles.year}>Premiere Year: {show?.year}</div>
                            {/* <div id={styles.genre}>genres</div> */}
                        </div>
                        <div id={styles.playAddDiv}>
                            <NavLink to={`/shows/${id}/video`}>
                                <button id={styles.playButton}>PLAY</button>
                            </NavLink>
                            <span id={styles.addButton} onClick={(e) => { addShowModal(e) }}><MdAddCircle/></span>
                        </div>
                        <div id={styles.showDetailsDiv}>
                            <span id={styles.showDetailText}>{show?.details_body}</span>
                        </div>
                    </div>
                </div>
            </div>
            {modalView ? (<FormModal />) : null}
        </>

    );
}

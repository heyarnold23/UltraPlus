import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import styles from './Watchlist.module.css';
import { addModal, toggleModalView, passData } from '../../store/session';
import FormModal from '../Modal';
import { getWatchlistsThunk } from '../../store/watchlist';


export default function Watchlist() {
    const sessionUser = useSelector(state => state.session.user);
    const watchlistsObj = useSelector(state => state?.watchlists)
    const watchlistsArr = Object.values(watchlistsObj)
    const profileId = localStorage?.getItem('profile')
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false);

    const modalView = useSelector(state => state.session.modalView)

    console.log("THIS WATCHLISTS ARR", watchlistsArr);


    useEffect(() => {
        dispatch(getWatchlistsThunk(profileId))
    }, [dispatch, profileId])


    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    const closeMenu = (e) => {
        e.preventDefault()
        setShowMenu(false)
    }

    // maybe make a delete modal and an edit modal?
    const modal = (e, id, name) => {
        e.preventDefault()
        const data = {
            id,
            name
        }
        // dispatch(addModal("deleteProfile"))
        dispatch(toggleModalView(true))
        dispatch(passData(data))
    }

    // Add onclick function here to dispatch the setProfile thunk
    // const setProfile = (id) => {
    //     // dispatch(setProfileThunk(id))
    //     localStorage.setItem('profile', id)
    // }

    // const profiles = useSelector(store => store?.profiles)
    // const profileArr = Object.values(profiles)
    // console.log("\n\n\n\n\n\n profilessss", profileArr, "\n\n\n\n\n\n\n\n\n\n");


    return (
        <>
            <div id={styles.page}>
                <div id={styles.midContainer}>
                    <div id={styles.whosDiv}>
                        <span id={styles.whosText}>Who's Watching?</span>
                    </div>
                    <div id={styles.profileContainer}>
                        {watchlistsArr.map((watchlist) => {
                            return (
                                // (sessionUser.id === profile.user_id) && (
                                    <div key={watchlist.id} className={styles.profileDiv}>
                                        {!showMenu ? (
                                            <a href='/watchlist/:id'>
                                                <div id={styles.profilePic} style={{ backgroundImage: `url()`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                                                    placeholder
                                                </div>
                                            </a>
                                        ) : (
                                            <>
                                                <div id={styles.profilePicEdit} style={{ backgroundImage: `url()`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                                                    <div id={styles.buttonDiv}>
                                                        <div id={styles.editButton}>Edit Modal</div>
                                                        <div id={styles.deleteButton} onClick={(e) => { modal(e, watchlist?.id, watchlist.name) }}>Delete modal</div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                        }
                                        <div id={styles.profileName}>
                                            {watchlist.name}
                                        </div>
                                    </div>
                                // )
                            )
                        }

                        )}
                        <div className={styles.profileDiv}>
                                <div id={styles.profilePic} style={{ backgroundImage: `url(https://i.ibb.co/2tnCP4M/rough-draft-plus.png)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                                    {/* Add Watchlist modal onclicker here */}
                                </div>
                            <div id={styles.profileName}>
                                Add Watchlist
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {modalView ? (<FormModal />) : null}
        </>
    );
}

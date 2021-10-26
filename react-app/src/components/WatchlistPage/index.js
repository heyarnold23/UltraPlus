import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import styles from './WatchlistPage.module.css';
import { addModal, toggleModalView, passData } from '../../store/session';
import FormModal from '../Modal';
import { getWatchlistShowsThunk } from '../../store/watchlist';


export default function WatchlistPage() {
    const sessionUser = useSelector(state => state.session.user);
    const showsArr = useSelector(state => state?.watchlists?.shows)
    // console.log('SHOWTIME BAYBEE', showsArr);
    const profileId = localStorage?.getItem('profile')
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false);
    const { id } = useParams()

    const modalView = useSelector(state => state.session.modalView)

    // console.log("THIS WATCHLISTS ID", id);


    useEffect(() => {
        dispatch(getWatchlistShowsThunk(id))
    }, [dispatch, id])


    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    const closeMenu = (e) => {
        e.preventDefault()
        setShowMenu(false)
    }

    // maybe make a delete modal and an edit modal?
    const createModal = (e) => {
        e.preventDefault()
        const data = {
            id: profileId
        }
        // dispatch(addModal("addWatchlist"))
        dispatch(toggleModalView(true))
        dispatch(passData(data))
    }

    const deleteModal = (e, id) => {
        e.preventDefault()
        console.log(id);
        const data = {
            id
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
                {/* {!showMenu ? (
                    <span id={styles.editProfile} onClick={openMenu}>EDIT PROFILES</span>
                ) : <span id={styles.editProfile} onClick={closeMenu}>CANCEL</span>} */}
                {/* <div id={styles.midContainer}>
                    <div id={styles.whosDiv}>
                        <span id={styles.whosText}>Watchlists</span>
                    </div> */}
                <div id={styles.watchlistNameDiv}>
                   <span id={styles.nameText}>WATCHLIST NAME</span>
                   <div>Edit</div>
                </div>
                <div id={styles.showContainer}>
                    {showsArr?.map((show) => {
                        return (
                            <>
                                {/* wrap this with a navlink to /show/id and pass in the showid with the navlink component */}
                                <div key={show.id} id={styles.showImage} style={{ backgroundImage: `url(${show.thumbnail_url})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
                            </>
                        )
                    })};
                </div>
                {/* </div> */}
            </div>
            {modalView ? (<FormModal />) : null}
        </>
    );
}

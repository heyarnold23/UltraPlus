import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink, useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import styles from './WatchlistPage.module.css';
import { addModal, toggleModalView, passData } from '../../store/session';
import FormModal from '../Modal';
import { getWatchlistShowsThunk } from '../../store/watchlist';


export default function WatchlistPage() {
    const sessionUser = useSelector(state => state.session.user);
    const showsArr = useSelector(state => state?.watchlists?.shows)
    // console.log('SHOWTIME BAYBEE', showsArr);
    let location = useLocation();
    const watchlistName = location?.state?.watchlist_name;

    const [body, setBody] = useState(watchlistName);
    const [errors, setErrors] = useState([]);
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
        setBody(watchlistName)
    }

    // maybe make a delete modal and an edit modal?
    const editModal = (e) => {
        e.preventDefault()
        const data = {
            // passing in the watchlist id
            id: id
        }
        dispatch(addModal("editWatchlist"))
        dispatch(toggleModalView(true))
        dispatch(passData(data))
    }

    const deleteModal = (e) => {
        e.preventDefault()
        // console.log(id);
        const data = {
            id: id
        }
        dispatch(addModal("deleteWatchlist"))
        dispatch(toggleModalView(true))
        dispatch(passData(data))
    }

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // setErrors([])

        // const newWatchlist = {
        // name: body,
        // profile_id: id
        // };

        // const data = await dispatch(addWatchlist(newWatchlist));
        // if (Array.isArray(data)) {
        //     await setErrors(data)
        // } else{
        //     history.push('/watchlists')
        //     dispatch(toggleModalView(false))
        // }

    };
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
                <div id={styles.watchlistNameDiv}>
                    {!showMenu ? (
                        <>
                            <span id={styles.nameText}>{watchlistName}</span>
                            <span id={styles.editWatchlist} onClick={openMenu}>Edit</span>
                        </>
                    ) : <>
                        <span id={styles.nameText}>
                            <form id={styles.editWatchlistForm} onSubmit={handleSubmit}>
                                <div id={styles.errors}>
                                    {errors.map((error, ind) => (
                                        <div key={ind}>{error}</div>
                                    ))}
                                </div>
                                <div>
                                    <input
                                        id={styles.nameInput}
                                        type='text'
                                        name='name'
                                        placeholder='Enter Name'
                                        onChange={(e) => setBody(e.target.value)}
                                        value={body}
                                    ></input>
                                </div>
                                <button type='submit' id={styles.saveButton}>SAVE</button>
                            </form>
                        </span>
                        <span onClick={closeMenu}>CANCEL</span>
                        {/* <span id={styles.editWatchlist} onClick={openMenu}>Edit</span> */}
                    </>
                    }
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

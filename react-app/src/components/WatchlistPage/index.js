import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import styles from './WatchlistPage.module.css';
import { addModal, toggleModalView, passData } from '../../store/session';
import FormModal from '../Modal';
import { editWatchlist, getWatchlistsThunk } from '../../store/watchlist';
import { getWatchlistShowsThunk, removeShowThunk } from '../../store/watchlistShows';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { RiDeleteBin2Fill } from 'react-icons/ri';

export default function WatchlistPage() {
    const showsArr = useSelector(state => state?.watchlistShows?.shows)


    // console.log('SHOWTIME BAYBEE', showsArr);
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const profileId = localStorage?.getItem('profile')
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false);
    const [showNotif, setshowNotif] = useState(false);
    const { id } = useParams()


    const watchlistsObj = useSelector(state => state.watchlists);
    const watchlistsArr = Object?.values(watchlistsObj)
    let foundName = watchlistsArr.find(object =>
        object.id == id
    );

    const [body, setBody] = useState(foundName?.name);


    const modalView = useSelector(state => state.session.modalView)

    // console.log("THIS WATCHLISTS ID", id);


    useEffect(() => {
        dispatch(getWatchlistsThunk(profileId))
        dispatch(getWatchlistShowsThunk(id))
    }, [dispatch, id, profileId])


    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
        setBody(foundName?.name)
    };

    const closeMenu = (e) => {
        e.preventDefault()
        setShowMenu(false)
        setBody(foundName?.name)
    }


    const deleteModal = (e) => {
        e.preventDefault()
        // console.log(id);
        const data = {
            id: id,
            name: foundName?.name
        }
        dispatch(addModal("deleteWatchlist"))
        dispatch(toggleModalView(true))
        dispatch(passData(data))
    }

    // removeShowThunk
    const removeShow = async (e, showId) => {
        e.preventDefault();
        setErrors([])

        const removing = {
            show_id: showId,
            watchlist_id: id
        };

        const data = await dispatch(removeShowThunk(removing));
        if (Array.isArray(data)) {
            await setErrors(data)
        }

        setshowNotif(true)
        setTimeout(() => {setshowNotif(false)}, 3000)

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([])

        const watchlist = {
            name: body,
            id: id
        };

        const data = await dispatch(editWatchlist(watchlist));
        if (Array.isArray(data)) {
            await setErrors(data)
        }
        else {
            history.push(`/watchlists/${id}`)
            setShowMenu(false)
        }

    };

    return (
        <>
            <div id={styles.page}>
                {/* {!showMenu ? (
                    <span id={styles.editProfile} onClick={openMenu}>EDIT PROFILES</span>
                ) : <span id={styles.editProfile} onClick={closeMenu}>CANCEL</span>} */}
                <div id={styles.watchlistNameDiv}>
                    {!showMenu ? (
                        <>

                            <span id={styles.nameText}>{foundName?.name}</span>
                            <span id={styles.editWatchlist} onClick={openMenu}><FaEdit /></span>


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
                                <div id={styles.saveCancelDiv}>
                                    <button onClick={closeMenu} id={styles.cancelButton}>CANCEL</button>
                                    <button type='submit' id={styles.saveButton}>SAVE</button>
                                </div>
                            </form>
                        </span>
                        <div id={styles.deleteButton}>
                            <span id={styles.deleteListButton} onClick={deleteModal} ><RiDeleteBin2Fill /></span>
                        </div>
                    </>
                    }
                </div>
                {showsArr?.length > 0 ? (
                    <div id={styles.showContainer}>
                        {showsArr?.map((show) => {
                            return (
                                <>
                                    <div id={styles.showBox}>
                                        <NavLink to={`/shows/${show.id}`}>
                                        <div key={show.id} id={styles.showImage} style={{ backgroundImage: `url(${show.thumbnail_url})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}/>
                                        </NavLink>
                                        <span id={styles.showText}>{show?.name}</span>
                                        <div id={styles.deleteShowButton} onClick={(e) => { removeShow(e, show.id) }}><RiDeleteBin2Line /></div>
                                        {/* <div id={styles.deleteShowText} onClick={(e) => { removeShow(e, show.id) }}>DELETE</div> */}
                                    </div>
                                </>
                            )
                        })}
                    {showNotif && (
                        <div id={styles.notif}>Show was removed!</div>
                    )}
                    </div>
                ) : (
                    <div id={styles.showContainer}>
                        <span>NO SHOWS YET!</span>
                        <span>START ADDING!</span>
                        {showNotif && (
                        <div id={styles.notif}>Show was removed!</div>
                        )}
                    </div>
                )
                }

                {/* </div> */}
            </div>
            {modalView ? (<FormModal />) : null}
        </>
    );
}

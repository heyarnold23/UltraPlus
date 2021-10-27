import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import styles from './WatchlistPage.module.css';
import { addModal, toggleModalView, passData } from '../../store/session';
import FormModal from '../Modal';
import { editWatchlist, getWatchlistsThunk } from '../../store/watchlist';
import { getWatchlistShowsThunk } from '../../store/watchlistShows';

export default function WatchlistPage() {
    const sessionUser = useSelector(state => state.session.user);
    const showsArr = useSelector(state => state?.watchlistShows?.shows)


    // console.log('SHOWTIME BAYBEE', showsArr);
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const profileId = localStorage?.getItem('profile')
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false);
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
                        <span onClick={deleteModal}>DELETE</span>
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

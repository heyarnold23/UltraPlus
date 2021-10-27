import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addWatchlist, getWatchlistsThunk } from '../../store/watchlist';
import styles from './AddShowModal.module.css'
import { toggleModalView } from '../../store/session';

export default function AddShowModal() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [body, setBody] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    const profileId = localStorage?.getItem('profile')
    let data = useSelector(state => state.session.passingData)
    const [id] = useState(data.id)

// console.log("THIS IS BODY INSIDE THE MODAL", id);
    useEffect(() => {
        dispatch(getWatchlistsThunk(profileId))
    }, [dispatch, profileId])

    const watchlistsObj = useSelector(state => state?.watchlists)
    const watchlistsArr = Object?.values(watchlistsObj)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([])

        const appending = {
            show_id: id,
            watchlist_id: body
        };

        // const data = await dispatch((appending));
        if (Array.isArray(data)) {
            await setErrors(data)
        } else {
            history.push('/watchlists')
            dispatch(toggleModalView(false))
        }

    };

    const closeModal = async () => {
        dispatch(toggleModalView(false))
    };

    return (
        <>
            <div id={styles.page}>
                <div id={styles.midContainer}>
                    <div id={styles.addProfileDiv}>
                        <div id={styles.text}>
                            ADD TO A WATCHLIST
                        </div>
                        <div id={styles.profileForm}>
                            <form onSubmit={handleSubmit}>
                                <div id={styles.errors}>
                                    {errors.map((error, ind) => (
                                        <div key={ind}>{error}</div>
                                    ))}
                                </div>
                                <div>
                                    {/* <input
                                    id={styles.nameInput}
                                    type='text'
                                    name='name'
                                    placeholder='Enter Name'
                                    onChange={(e) => setBody(e.target.value)}
                                    value={body}
                                    ></input> */}
                                    <select
                                        id={styles.selectDropdown}
                                        name="watchlist"
                                        onChange={(e) => setBody(e.target.value)}
                                        value={body}
                                    >
                                        <option value="">Click here</option>
                                        {watchlistsArr.map((watchlist) => {
                                            return (
                                            <option key={watchlist.id} value={`${watchlist.id}`}>{watchlist.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <button type='submit' id={styles.saveButton}>SAVE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

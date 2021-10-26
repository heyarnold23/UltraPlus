import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addWatchlist } from '../../store/watchlist';
import styles from './CreateWatchlist.module.css'
import { toggleModalView } from '../../store/session';

export default function CreateWatchlist() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [body, setBody] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    const profileId = localStorage?.getItem('profile')
    let data = useSelector(state => state.session.passingData)
    const [id] = useState(data.id)


    // useEffect(() => {
    //     dispatch(getAvatarsThunk())
    // }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([])

        const newWatchlist = {
        name: body,
        profile_id: id
        };

        const data = await dispatch(addWatchlist(newWatchlist));
        if (Array.isArray(data)) {
            await setErrors(data)
        } else{
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
                            ADD A WATCHLIST
                        </div>
                        <div id={styles.profileForm}>
                            <form onSubmit={handleSubmit}>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import styles from './DeleteWatchlist.module.css'
import { toggleModalView } from '../../store/session';
import { deleteWatchlistThunk } from '../../store/watchlist';


export default function DeleteWatchlist() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    let data = useSelector(state => state.session.passingData)
    const history = useHistory();
    const [id] = useState(data.id)

    const handleDelete = async (e) => {
        e.preventDefault();
        const watchlistData = {
            id: id
        };
        const data = dispatch(deleteWatchlistThunk(watchlistData));
        if (data) {
            setTimeout(() => {history.push('/watchlists')}, 100)
            setTimeout(() => {dispatch(toggleModalView(false))}, 100)
        }
    };

    const closeModal = async () => {
        dispatch(toggleModalView(false))
    };

    return (
        <>
            <div id={styles.main}>
                <div id={styles.heading}>
                    Delete {data?.name}?
                </div>
                <div id={styles.warning}>
                    This watchlist will be deleted. There is no way to undo this.
                </div>
                <div id={styles.buttonDiv}>
                    <div id={styles.cancelButton} onClick={closeModal}>
                        CANCEL
                    </div>
                    <div id={styles.deleteButton} onClick={handleDelete}>
                        DELETE
                    </div>
                </div>
            </div>
        </>
    );
}

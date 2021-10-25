import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import LogoutButton from '../auth/LogoutButton';
import { Redirect } from 'react-router-dom';
import { getAvatarsThunk } from '../../store/avatars'
import { editProfile, addProfile, deleteProfileThunk } from '../../store/profiles';
import styles from './DeleteProfile.module.css'
import { toggleModalView } from '../../store/session';


export default function DeleteProfile() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    let data = useSelector(state => state.session.passingData)
    const history = useHistory();
    const [id] = useState(data.id)


    useEffect(() => {
        dispatch(getAvatarsThunk())
    }, [dispatch])





    // console.log("\n\n\n\n\n\n PASSING DATA", data, "\n\n\n\n\n\n\n\n\n\n");

    // const updateBody = (e) => setBody(e.target.value);


    const handleDelete = async (e) => {
        e.preventDefault();


        const profileData = {
            id: id
        };

        // console.log("\n\n\n\n\n\n PROFILE DATA", profileData, "\n\n\n\n\n\n\n\n\n\n");

        const data = dispatch(deleteProfileThunk(profileData));
        if (data) {
            history.push('/whos-watching')
             dispatch(toggleModalView(false))

        }


    };

    const closeModal = async () => {
        dispatch(toggleModalView(false))
    };

    return (
        <>
            <div id={styles.main}>
                <div id={styles.heading}>
                    Delete {data?.name}'s profile?
                </div>
                <div id={styles.warning}>
                    This profile along with its watchlist will also be deleted. There is no way to undo this.
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

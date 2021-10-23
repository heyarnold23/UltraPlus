import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import LogoutButton from '../auth/LogoutButton';
import { Redirect } from 'react-router-dom';
import { getAvatarsThunk } from '../../store/avatars'
import { editProfile, setProfile } from '../../store/profiles';
import styles from './DeleteProfile.module.css'


export default function DeleteProfile() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    let location = useLocation();
    // const avatarId = location?.state?.avatar_id;
    // const avatarUrl = location?.state?.avatar_url;
    // const profileName = location?.state?.profile_name;
    // const profileId = location?.state?.profile_id;
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    // const [body, setBody] = useState(profileName);


    useEffect(() => {
        dispatch(getAvatarsThunk())
    }, [dispatch])





    // console.log("\n\n\n\n\n\n found", avatarId, "\n\n\n\n\n\n\n\n\n\n");

    // const updateBody = (e) => setBody(e.target.value);


    const handleDelete = async (e) => {
        e.preventDefault();


        // const updateProfile = {
        //     id: profileId,
        //     name: body,
        //     user_id: sessionUser.id,
        //     avatar_id: avatarId
        // };
        // console.log(updateProfile);

        // if (body.length > 0) {
        //     const data = await dispatch(editProfile(updateProfile));
        //     if (data) {
        //         history.push('/whos-watching')
        //     }
        // }
        // setErrors(['NO WORK']);

    };

    return (
        <>
            <div id={styles.main}>
                <div id={styles.heading}>
                    Delete placeholder's profile?
                </div>
                <div id={styles.warning}>
                    This profile along with its watchlist will also be deleted. There is no way to undo this.
                </div>
                <div id={styles.buttonDiv}>
                    <div id={styles.cancelButton}>
                        CANCEL
                    </div>
                    <div id={styles.deleteButton} onClick>
                        DELETE
                    </div>
                </div>
            </div>
        </>
    );
}

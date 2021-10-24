import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import LogoutButton from '../auth/LogoutButton';
import { Redirect } from 'react-router-dom';
import { getAvatarsThunk } from '../../store/avatars'
import { editProfile, setProfile } from '../../store/profiles';
import styles from './EditProfile.module.css'
import { MdOutlineEditLocationAlt } from 'react-icons/md'



export default function EditProfile() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    let location = useLocation();
    const avatarId = location?.state?.avatar_id;
    const avatarUrl = location?.state?.avatar_url;
    const profileName = location?.state?.profile_name;
    const profileId = location?.state?.profile_id;
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    const [body, setBody] = useState(profileName);


    useEffect(() => {
        dispatch(getAvatarsThunk())
    }, [dispatch])





    // console.log("\n\n\n\n\n\n found", avatarId, "\n\n\n\n\n\n\n\n\n\n");

    const updateBody = (e) => setBody(e.target.value);


    const handleSubmit = async (e) => {
        e.preventDefault();


        const updateProfile = {
            id: profileId,
            name: body,
            user_id: sessionUser.id,
            avatar_id: avatarId
        };
        console.log(updateProfile);


        const data = await dispatch(editProfile(updateProfile));
        if (Array.isArray(data)) {
            await setErrors(data)
        } else {
            history.push('/whos-watching')
        }

    };

    return (
        <>
            <div id={styles.navContainer}>
                <div id={styles.navPic} />
                <NavLink id={styles.cancelButton} to='/whos-watching'>
                    <span id={styles.cancel}>CANCEL</span>
                </NavLink>
            </div>
            <div id={styles.page}>
                <div id={styles.midContainer}>
                    <div id={styles.addProfileDiv}>
                        <div id={styles.text}>
                            EDIT PROFILE
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
                                        onChange={updateBody}
                                        value={body}
                                    ></input>
                                </div>
                                <button type='submit' id={styles.saveButton}>SAVE</button>
                            </form>
                        </div>
                        {/* <button id={styles.saveDiv} type='submit'>
                            SAVE
                        </button> */}
                    </div>
                    <div id={styles.picDiv} style={{ backgroundImage: `url(${avatarUrl})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
                    <NavLink to={{ pathname: '/select-avatar', state: { fromEditProfile: true, profileName: profileName, profileId: profileId } }}>
                        <div id={styles.buttonDiv}>
                            <div id={styles.editButton}><MdOutlineEditLocationAlt /></div>
                        </div>
                    </NavLink>

                </div>
            </div>
        </>
    );
}

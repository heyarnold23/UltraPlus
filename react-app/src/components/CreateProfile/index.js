import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import LogoutButton from '../auth/LogoutButton';
import { Redirect } from 'react-router-dom';
import { getAvatarsThunk } from '../../store/avatars'
import { setProfile } from '../../store/profiles';
import styles from './CreateProfile.module.css'

export default function CreateProfile() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    let location = useLocation();
    const avatarId = location?.state?.avatar_id;
    const avatarImageUrl = location?.state?.avatar_image_url;
    const [body, setBody] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    useEffect(() => {
        dispatch(getAvatarsThunk())
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();


        const newProfile = {
        name: body,
        user_id: sessionUser.id,
        avatar_id: avatarId
        };
        console.log(newProfile);

        if(body.length > 0){
            const data = dispatch(setProfile(newProfile));
            if (data) {
                setErrors(data)
            }
        }
        history.push('/whos-watching')
        setErrors(['NO WORK']);

    };

    return (
        <>
            <div id={styles.navContainer}>
                <div id={styles.navPic} />
                {/* <NavLink id={styles.skipButton} to='/edit-profile'>
                    <span id={styles.skip}>SKIP</span>
                </NavLink> */}
            </div>
            <div id={styles.page}>
                <div id={styles.midContainer}>
                    <div id={styles.addProfileDiv}>
                        <div id={styles.text}>
                            ADD PROFILE
                        </div>
                        <div id={styles.profileForm}>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    {errors.map((error, ind) => (
                                    <div key={ind}>{error}</div>
                                    ))}
                                </div>
                                <div>
                                    <label>Name</label>
                                    <input
                                    type='text'
                                    name='name'
                                    onChange={(e) => setBody(e.target.value)}
                                    value={body}
                                    ></input>
                                </div>
                                <button type='submit'>SAVE</button>
                            </form>
                        </div>
                        <button id={styles.saveDiv} type='submit'>
                            SAVE
                        </button>
                    </div>
                    <div id={styles.picDiv} style={{ backgroundImage: `url(${avatarImageUrl})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

                    </div>
                </div>
            </div>
        </>
    );
}

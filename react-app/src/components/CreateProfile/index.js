import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import LogoutButton from '../auth/LogoutButton';
import { Redirect } from 'react-router-dom';
import { getAvatarsThunk } from '../../store/avatars'
import styles from './CreateProfile.module.css'

export default function CreateProfile() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    let location = useLocation();
    const avatarId = location?.state?.avatar_id;
    const [body, setBody] = useState('');
    const [errors, setErrors] = useState([]);


    useEffect(() => {
        dispatch(getAvatarsThunk())
    }, [dispatch])

    const avatars = useSelector(store => store?.avatars)
    const avatarsArr = Object.values(avatars)
    let found;

    avatarsArr.forEach(element => {
        if (element.id == avatarId) {
            found = element.image_url
        }
    });

    // const found = avatarsArr.find(element => element[0]?.id === avatarId)
    console.log("\n\n\n\n\n\n avatarsArr", avatarsArr, "\n\n\n\n\n\n\n\n\n\n");
    console.log("\n\n\n\n\n\n found", found, "\n\n\n\n\n\n\n\n\n\n");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newProfile = {
        name: body,
        user_id: sessionUser.id,
        avatar_id: found
        };

        if(body.length > 0 || body.length === 0){
        setErrors([]);
        // dispatch(createComment(newComment));
        }
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
                                {/* <button type='submit'>Sign Up</button> */}
                            </form>
                        </div>
                        <button id={styles.saveDiv} type='submit'>
                            SAVE
                        </button>
                    </div>
                    <div id={styles.picDiv} style={{ backgroundImage: `url(${found})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

                    </div>
                </div>
            </div>
        </>
    );
}

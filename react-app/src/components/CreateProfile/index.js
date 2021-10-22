import React from 'react';
import { useEffect } from 'react';
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
    console.log(avatarId);


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
                            FORM
                        </div>
                        <div id={styles.saveDiv}>
                            SAVE
                        </div>
                    </div>
                    <div id={styles.picDiv} style={{ backgroundImage: `url(${found})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

                    </div>
                </div>
            </div>
        </>
    );
}

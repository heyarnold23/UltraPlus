import React from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import LogoutButton from '../auth/LogoutButton';
import { Redirect } from 'react-router-dom';
import { getProfilesThunk } from '../../store/profiles'
import styles from './WhosWatching.module.css';


export default function WhosWatching() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfilesThunk(sessionUser.id))
    }, [dispatch, sessionUser])


    // if (!sessionUser) {
    //     return <Redirect to='/main' />;
    // }

    const profiles = useSelector(store => store?.profiles)
    const profileArr = Object.values(profiles)
    console.log("\n\n\n\n\n\n profilessss", profileArr, "\n\n\n\n\n\n\n\n\n\n");


    return (
        <>
            <div id={styles.navContainer}>
                <div id={styles.navPic} />
                <NavLink id={styles.editProfileButton} to='/edit-profile'>
                    <span id={styles.editProfile}>EDIT PROFILES</span>
                </NavLink>
            </div>
            <div id={styles.page}>
                <div id={styles.midContainer}>
                    <div id={styles.whosDiv}>
                        <span id={styles.whosText}>Who's Watching?</span>
                    </div>
                    <div id={styles.profileContainer}>
                        {/* here, do mappings for profiles based on user's id */}
                        {profileArr.map((profile) =>
                            <div key={profile.id} className={styles.profileDiv}>
                                <NavLink to='/main'>
                                    <div id={styles.profilePic} style={{ backgroundImage: `url(${profile.avatar_pic.image_url})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
                                </NavLink>
                                <div id={styles.profileName}>
                                    {profile.name}
                                </div>
                            </div>
                        )}
                        {/* and if they don't have profiles then show below */}
                        <div className={styles.profileDiv}>
                                <NavLink to='/select-avatar'>
                                <div id={styles.profilePic} style={{ backgroundImage: `url(https://i.ibb.co/2tnCP4M/rough-draft-plus.png)`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
                                </NavLink>
                            <div id={styles.profileName}>
                                Add Profile
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

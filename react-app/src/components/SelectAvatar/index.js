
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { Redirect } from 'react-router-dom';
import styles from './SelectAvatar.module.css'

export default function SelectAvatar() {
    const sessionUser = useSelector(state => state.session.user)

    // if (!sessionUser) {
    //     return <Redirect to='/main' />;
    // }

    return (
        <>
            <div id={styles.navContainer}>
                <div id={styles.navPic} />
                {/* <NavLink id={styles.skipButton} to='/edit-profile'>
                    <span id={styles.skip}>SKIP</span>
                </NavLink> */}
            </div>
            <div id={styles.page}>
                    <div id={styles.chooseDiv}>
                        <span id={styles.chooseText}>Choose Avatar</span>
                    </div>
                    <div id={styles.profileContainer}>
                        {/* here, do mappings for avatars*/}
                        <div id={styles.avatarRow}>
                            <div id={styles.avatarPic}>
                                {/* pass in prop to navlink? */}
                                <NavLink to='/create-profile'>
                                Pic
                                </NavLink>
                            </div>
                        </div>
                    </div>
            </div>

        </>
    );
}


import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { Redirect } from 'react-router-dom';
import styles from './Splash.module.css'

export default function Splash() {
    const sessionUser = useSelector(state => state.session.user)

    if (sessionUser) {
        return <Redirect to='/main' />;
    }

    return (
        <>
            <div id={styles.invisibleNav}>
                <NavLink id={styles.logInButton} to='/login'>
                    <span id={styles.logInText}>LOG IN</span>
                </NavLink>
            </div>
            <div id={styles.firstHalf}>
                <div id={styles.middleDiv}>
                    <div id={styles.picInMid}/>
                    <div id={styles.signUpInMid}>
                        <NavLink id={styles.signButton} to='/sign-up'>
                            <span id={styles.signUpText}>Sign up for Ultra+</span>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div id={styles.secondHalf}>
                We in here baybee
            </div>
        </>
    );
}

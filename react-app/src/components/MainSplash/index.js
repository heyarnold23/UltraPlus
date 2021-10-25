import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import styles from './MainSplash.module.css'


export default function MainSplash() {


    const profileId = localStorage.getItem('profile')
    console.log(profileId);

    return (
        <>
            <div id={styles.page}>
                MAIN SPLASH

            </div>
            <LogoutButton />
        </>
    );
}

import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import styles from './MainSplash.module.css'


export default function MainSplash() {


    // dispatch for shows
    // const profileId = localStorage.getItem('profile')
    // console.log(profileId);

    return (
        <div id={styles.page}>
            <div id={styles.carousel}>
                PLACEHOLDER
            </div>
            <div id={styles.studiosContainer}>
                studios placeholder
            </div>
            <div id={styles.showContainer}>
                {/* map out the shows object */}
            </div>
        </div>
    );
}

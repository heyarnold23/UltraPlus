import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import styles from './MainSplash.module.css'


export default function MainSplash() {
    return (
        <>
            <div>
                MAIN SPLASH
            </div>
            <LogoutButton />
        </>
    );
}

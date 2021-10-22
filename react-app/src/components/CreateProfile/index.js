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
        // dispatch(getAvatarsThunk())
    }, [dispatch])

    // const avatars = useSelector(store => store?.avatars)
    // const avatarsArr = Object.values(avatars)
    // console.log("\n\n\n\n\n\n avatars", avatarsArr, "\n\n\n\n\n\n\n\n\n\n");

    return (
        <>
            <div>
                INSIDE CREATE PROFILE
            </div>
        </>
    );
}

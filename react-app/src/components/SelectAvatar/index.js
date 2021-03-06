import React from 'react';
import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getAvatarsThunk } from '../../store/avatars'
import styles from './SelectAvatar.module.css'

export default function SelectAvatar() {
    const dispatch = useDispatch();
    let location = useLocation();
    const fromEdit = location?.state?.fromEditProfile
    const profileName = location?.state?.profileName
    const profileId = location?.state?.profileId

    useEffect(() => {
        dispatch(getAvatarsThunk())
    }, [dispatch])

    const avatars = useSelector(store => store?.avatars)
    const avatarsArr = Object.values(avatars)


    return (
        <>
            <div id={styles.navContainer}>
                <div id={styles.navPic} />
            </div>
            <div id={styles.page}>
                <div id={styles.chooseDiv}>
                    <span id={styles.chooseText}>Choose Avatar</span>
                </div>
                {/* here, do mappings for avatars*/}
                <div id={styles.avatarContainer}>
                    {avatarsArr?.map((avatar) => {
                        return (
                            <>
                                {!fromEdit ? (
                                    <NavLink key={avatar.id} to={{ pathname: '/create-profile', state: { avatar_id: `${avatar.id}`, avatar_image_url: `${avatar.image_url}` } }}>
                                        {/* pass in prop to navlink? */}
                                        <div id={styles.avatarPic} style={{ backgroundImage: `url(${avatar.image_url})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
                                    </NavLink>
                                ) : (
                                    <NavLink key={avatar.id} to={{ pathname: '/edit-profile', state: { avatar_id: `${avatar.id}`, avatar_url: `${avatar.image_url}`, profile_name: `${profileName}`, profile_id: `${profileId}` } }}>
                                        {/* pass in prop to navlink? */}
                                        <div id={styles.avatarPic} style={{ backgroundImage: `url(${avatar.image_url})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
                                    </NavLink>
                                )
                                }
                            </>
                        )
                    }
                    )}
                </div>
            </div>

        </>
    );
}

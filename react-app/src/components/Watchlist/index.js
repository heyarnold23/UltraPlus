import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import LogoutButton from '../auth/LogoutButton';
import { Redirect } from 'react-router-dom';
import { getProfilesThunk, setProfileThunk } from '../../store/profiles'
import { MdOutlineEditLocationAlt } from 'react-icons/md'
import { TiDeleteOutline } from 'react-icons/ti'
import styles from './Watchlist.module.css';
import { addModal, toggleModalView, passData } from '../../store/session';
import FormModal from '../Modal';


export default function Watchlist() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false);

    const modalView = useSelector(state => state.session.modalView)


    useEffect(() => {
        dispatch(getProfilesThunk(sessionUser.id))
    }, [dispatch, sessionUser])


    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    const closeMenu = (e) => {
        e.preventDefault()
        setShowMenu(false)
    }

    // maybe make a delete modal and an edit modal?
    const modal = (e, id, name) => {
        e.preventDefault()
        const data = {
            id,
            name
        }
        // dispatch(addModal("deleteProfile"))
        dispatch(toggleModalView(true))
        dispatch(passData(data))
    }

    // Add onclick function here to dispatch the setProfile thunk
    // const setProfile = (id) => {
    //     // dispatch(setProfileThunk(id))
    //     localStorage.setItem('profile', id)
    // }

    // const profiles = useSelector(store => store?.profiles)
    // const profileArr = Object.values(profiles)
    // console.log("\n\n\n\n\n\n profilessss", profileArr, "\n\n\n\n\n\n\n\n\n\n");


    return (
        <>
            <div id={styles.navContainer}>
                <div id={styles.navPic} />
                {!showMenu ? (
                    <span id={styles.editProfile} onClick={openMenu}>EDIT PROFILES</span>
                ) : <span id={styles.editProfile} onClick={closeMenu}>CANCEL</span>}
            </div>
            <div id={styles.page}>
                {/* <div id={styles.midContainer}>
                    <div id={styles.whosDiv}>
                        <span id={styles.whosText}>Who's Watching?</span>
                    </div>
                    <div id={styles.profileContainer}>
                        {profileArr.map((profile) => {
                            return (
                                (sessionUser.id === profile.user_id) && (
                                    <div key={profile.id} className={styles.profileDiv}>
                                        {!showMenu ? (
                                            <a href='/main'>
                                                <div id={styles.profilePic} onClick={(e) => {setProfile(profile?.id)}} style={{ backgroundImage: `url(${profile.avatar_pic.image_url})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
                                            </a>
                                        ) : (
                                            <>
                                                <div id={styles.profilePicEdit} style={{ backgroundImage: `url(${profile.avatar_pic.image_url})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                                                    <div id={styles.buttonDiv}>
                                                        <NavLink to={{ pathname: '/edit-profile', state: { avatar_id: `${profile.avatar_pic_id}`, avatar_url: `${profile.avatar_pic.image_url}`, profile_name: `${profile.name}`, profile_id: `${profile.id}` } }}>
                                                            <div id={styles.editButton}><MdOutlineEditLocationAlt /></div>
                                                            {profile.avatar_id}
                                                        </NavLink>
                                                        <div id={styles.deleteButton} onClick={(e) => { modal(e, profile?.id, profile.name) }}><TiDeleteOutline /></div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                        }
                                        <div id={styles.profileName}>
                                            {profile.name}
                                        </div>
                                    </div>
                                )
                            )
                        }

                        )}
                        <div className={styles.profileDiv}>
                            <NavLink to='/select-avatar'>
                                <div id={styles.profilePic} style={{ backgroundImage: `url(https://i.ibb.co/2tnCP4M/rough-draft-plus.png)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
                            </NavLink>
                            <div id={styles.profileName}>
                                Add Profile
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            {modalView ? (<FormModal />) : null}
        </>
    );
}

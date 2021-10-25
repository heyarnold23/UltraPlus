import React, { useState, useEffect } from "react";

import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import styles from './Navigation.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillHome } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { getProfilesThunk } from '../../store/profiles';
import * as sessionActions from '../../store/session'

export default function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  //need to get profile every time
  // const profileUser = useSelector(state => state?.profiles?.profile)
  const dispatch = useDispatch();
  const userArr = sessionUser?.profiles
  const profileId = localStorage?.getItem('profile')
  const foundProfile = userArr?.find((profile) => profile?.id == profileId)
  const [showMenu, setShowMenu] = useState(false);

  console.log('foundProfile in nav', foundProfile);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  useEffect(() => {
    dispatch(getProfilesThunk(sessionUser.id))
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [dispatch, sessionUser, showMenu])

  return (
    <div id={styles.navContainer}>
      <div id={styles.navPicLinkDiv}>
        <div id={styles.navPic} />
        <div id={styles.linksDiv}>
          <NavLink to='/main' className={styles.link}>
            <AiFillHome className={styles.icon} />
            <span className={styles.text}>HOME</span>
          </NavLink>
          <NavLink to='/watchlist' className={styles.link}>
            <AiOutlinePlus className={styles.icon} />
            <span className={styles.text}>WATCHLIST</span>
          </NavLink>
          <NavLink to='/search' className={styles.link}>
            <AiOutlineSearch className={styles.icon} />
            <span className={styles.text}>SEARCH</span>
          </NavLink>
        </div>
      </div>
      <div id={styles.profileDiv} >
        <div id={styles.nameText}>{foundProfile?.name}</div>
        <div id={styles.profilePic} onClick={openMenu} style={{ backgroundImage: `url(${foundProfile?.avatar_pic?.image_url})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
        {showMenu && (
          <div className={styles.popOut}>
            <span className={styles.account}>Account</span>
            <div className={styles.listing}>username</div>
            <div className={styles.listing}>placeholder</div>
            <div className={styles.listing}>
              <button className={styles.logOutButton} onClick={logout}>Log Out</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

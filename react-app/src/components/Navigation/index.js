import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import styles from './Navigation.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'

export default function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  //need to get profile every time
  // const profileUser = useSelector(state => state?.profiles?.profile)
  const dispatch = useDispatch();

    useEffect(() => {
      // have dispatch here to get the profile set after choosing a profile
      // dispatch(getAvatarsThunk())
  }, [dispatch])

  return (
    <div id={styles.navContainer}>
      <div id={styles.navPicLinkDiv}>
        <div id={styles.navPic} />
        <div id={styles.linksDiv}>
          <NavLink to='/main' className={styles.link}>
            <AiFillHome className={styles.icon}/>
            <span className={styles.text}>HOME</span>
          </NavLink>
          <NavLink to='/watchlist' className={styles.link}>
            <AiOutlinePlus className={styles.icon}/>
            <span className={styles.text}>WATCHLIST</span>
          </NavLink>
          <NavLink to='/search' className={styles.link}>
            <AiOutlineSearch className={styles.icon}/>
            <span className={styles.text}>SEARCH</span>
          </NavLink>
        </div>
      </div>
      <div id={styles.profileDiv}>
        Profile Pic
      </div>
    </div>
  );
}

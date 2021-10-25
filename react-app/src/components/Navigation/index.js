import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import styles from './Navigation.module.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'

export default function Navigation() {
  return (
    <div id={styles.navContainer}>
      <div id={styles.navPicLinkDiv}>
        <div id={styles.navPic} />
        <div id={styles.linksDiv}>
          <NavLink to='/main' className={styles.link}>
            <AiFillHome className={styles.icon}/>
            HOME
          </NavLink>
          <NavLink to='/watchlist' className={styles.link}>
            <AiOutlinePlus className={styles.icon}/>
            WATCHLIST
          </NavLink>
          <NavLink to='/search' className={styles.link}>
            <AiOutlineSearch className={styles.icon}/>
            SEARCH
          </NavLink>
        </div>
      </div>
      <div id={styles.profileDiv}>
        Profile Pic
      </div>
    </div>
  );
}

import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import styles from './ShowVideo.module.css'
import { getOneShowThunk } from '../../store/shows';
import { NavLink, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/lazy'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

export default function ShowVideo() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [visible, setVisible] = useState();

    // dispatch for shows
    useEffect(() => {
        dispatch(getOneShowThunk(id))
    }, [dispatch, id])
    const show = useSelector(state => state?.shows)

    let x;

    const displayBack = () => {
        if (x) clearTimeout(x);
        setVisible(true)
        x =setTimeout(() => {setVisible()}, 3500)
    }

    // const showsObj = useSelector(state => state?.shows)
    // const showsArr = Object.values(showsObj)
    // console.log('shows in MAINSPLASH',showsArr);
    // const profileId = localStorage.getItem('profile')
    // console.log(profileId);

    return (
        <>
            <div id={styles.page} onMouseMove={displayBack} >
                <ReactPlayer id={styles.player} width='100%' height='100%' controls='true' playing='true' url={`${show?.video_url}`} />
                {/* <video id={styles.video} src={`https://project-videos-ultraplus.s3.us-west-1.amazonaws.com/Saitama+vs+Genos+Fight+_+One+Punch+Man+(60FPS).mp4`} preload='auto' autoPlay controls/> */}
                {visible &&
                    <NavLink to={`/shows/${id}`} id={styles.button}>
                        <BsFillArrowLeftCircleFill /> Back
                    </NavLink>
                }
            </div>
        </>
    );
}

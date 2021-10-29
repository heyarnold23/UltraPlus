import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import styles from './MainSplash.module.css'
import { getShowsThunk } from '../../store/shows';
import { NavLink } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export default function MainSplash() {
    const dispatch = useDispatch();
    let [num, setNum] = useState(0);
    const [filteredShows, setFilteredShows] = useState()
    const [filtered, setFiltered] = useState(false)

    // dispatch for shows
    useEffect(() => {
        dispatch(getShowsThunk())
    }, [dispatch])

    const showsObj = useSelector(state => state?.shows)
    let showsArr = Object.values(showsObj)
    console.log('shows in MAINSPLASH', showsArr);
    // const profileId = localStorage.getItem('profile')
    // console.log(profileId);

    // const images = [{image: 'https://i.ibb.co/PTww0sY/Webp-net-resizeimage.jpg', id:4, title:'https://i.ibb.co/7r47MJD/5ede4a3fb760540004f2c5e9.png'   }, 'https://i.ibb.co/X2tfPJ4/dragon-ball-desktop-tournament-of-power-wallpapers-wallpaper-cave-jpg.jpg', 'https://i.ibb.co/CHP2cns/2.jpg']

    const images = [showsArr[3], showsArr[1], showsArr[8], showsArr[6]]

    const upOne = () => {
        if (num < images.length-1) {
            setNum(num+1)
        }
        else{
            setNum(0)
        }
    }

    const downOne = () => {
        if (num > 0){
            setNum(num-1)
        }
        else{
            setNum(images.length-1)
        }
    }

    const filterThis = (studioName) => {
        const filteredShows = showsArr.filter((show) => show.studio === studioName)
        setFilteredShows(filteredShows)
        setFiltered(!filtered)
    }

    console.log("THIS IS FILTEREDD", filteredShows);

    return (
        <div id={styles.page}>
            <div id={styles.carousel} style={{ backgroundImage: `url(${images[num]?.background_art_url})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div id={styles.leftarrow} onClick={downOne}><AiOutlineArrowLeft /></div>
                <NavLink id={styles.middle} to={`/shows/${images[num]?.id}`}>
                <div>
                    <div id={styles.middlePic} style={{ backgroundImage: `url(${images[num]?.title_pic_url})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}/>
                </div>
                </NavLink>
                <div id={styles.rightarrow} onClick={upOne}><AiOutlineArrowRight /></div>
            </div>
            <div id={styles.studiosContainer}>
            {!filtered ? (
                <>
                    <div onClick={() => filterThis('MAPPA')} id={styles.genreBox}>
                        <span>MAPPA</span>
                    </div>
                    <div onClick={() => filterThis('bones')} id={styles.genreBox}>
                        <span>BONES</span>
                    </div>
                    <div onClick={() => filterThis('Madhouse')} id={styles.genreBox}>
                        <span>MADHOUSE</span>
                    </div>
                    <div onClick={() => filterThis('Wit Studio')} id={styles.genreBox}>
                        <span>WIT STUDIO</span>
                    </div>
                    <div onClick={() => filterThis('A-1 Pictures')} id={styles.genreBox}>
                        <span>A-1 PICTURES</span>
                    </div>
                </>
            ): (
                <>
                <span onClick={() => setFiltered(false)} >Back to all shows</span>
                </>
            )}
            </div>
            <div id={styles.showContainer}>
                {/* map out the shows object */}
                {!filtered ? (
                <>
                    {showsArr.map((show) => {
                        return (
                                <NavLink key={show.id} to={`/shows/${show.id}`}>
                                    <div id={styles.showImage} style={{ backgroundImage: `url(${show.thumbnail_url})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
                                </NavLink>
                        )
                    })}
                </>
                ): (
                <>
                    {filteredShows.map((show) => {
                        return (
                                <NavLink key={show.id} to={`/shows/${show.id}`}>
                                    <div id={styles.showImage} style={{ backgroundImage: `url(${show.thumbnail_url})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
                                </NavLink>
                        )
                    })}
                </>
                )

                }
            </div>
        </div>
    );
}

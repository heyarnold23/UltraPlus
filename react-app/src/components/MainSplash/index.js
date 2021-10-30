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
            {/* <div id={styles.topStudiosText}>TOP STUDIOS</div> */}
            <div id={styles.studiosContainer}>
            {!filtered ? (
                <>
                    <div onClick={() => filterThis('MAPPA')} className={styles.studioBox} id={styles.mappa}>
                        <div id={styles.logo}style={{ backgroundImage: `url(https://i.ibb.co/WvQ3N9D/508px-MAPPA-Logo-svg.png)`, backgroundSize: 'contain', backgroundPosition:'center', backgroundRepeat: 'no-repeat' }}></div>
                    </div>
                    <div onClick={() => filterThis('bones')} className={styles.studioBox} id={styles.bones}>
                        <div id={styles.logo}style={{ backgroundImage: `url(https://i.ibb.co/mtZZB0Q/829-8290680-48kib-2000x410-bones-bones-studio-anime-logo.png)`, backgroundSize: 'contain', backgroundPosition:'center', backgroundRepeat: 'no-repeat' }}></div>
                    </div>
                    <div onClick={() => filterThis('Madhouse')} className={styles.studioBox} id={styles.madhouse}>
                        <div id={styles.logo}style={{ backgroundImage: `url(https://i.ibb.co/MCCXrv7/1200px-Madhouse-studio-logo-svg.png)`, backgroundSize: 'contain', backgroundPosition:'center', backgroundRepeat: 'no-repeat' }}></div>
                    </div>
                    <div onClick={() => filterThis('Wit Studio')} className={styles.studioBox} id={styles.wit}>
                        <div id={styles.logo}style={{ backgroundImage: `url(https://i.ibb.co/rvgwfTs/220px-Wit-studio-svg-1.png)`, backgroundSize: 'contain', backgroundPosition:'center', backgroundRepeat: 'no-repeat' }}></div>
                    </div>
                    <div onClick={() => filterThis('TOEI ANIMATION')} className={styles.studioBox} id={styles.toei}>
                        <div id={styles.logo}style={{ backgroundImage: `url(https://i.ibb.co/w7gXqDF/1200px-Toei-Animation-logo-svg.png)`, backgroundSize: 'contain', backgroundPosition:'center', backgroundRepeat: 'no-repeat' }}></div>
                    </div>
                </>
            ): (
                <>
                    <span onClick={() => setFiltered(false)} id={styles.studioText}> <AiOutlineArrowLeft /> Back to all shows</span>
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

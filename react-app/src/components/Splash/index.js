
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { Redirect } from 'react-router-dom';
import styles from './Splash.module.css'

export default function Splash() {
    const sessionUser = useSelector(state => state.session.user)

    if (sessionUser) {
        return <Redirect to='/whos-watching' />;
    }

    return (
        <>
            <div id={styles.invisibleNav}>
                <NavLink id={styles.logInButton} to='/login'>
                    <span id={styles.logInText}>LOG IN</span>
                </NavLink>
            </div>
            <div id={styles.firstHalf}>
                <div id={styles.middleDiv}>
                    <div id={styles.picInMid}/>
                    <div id={styles.signUpInMid}>
                        <NavLink id={styles.signButton} to='/sign-up'>
                            <span id={styles.signUpText}>Sign up for Ultra+</span>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div id={styles.secondHalf}>
                <div id={styles.headerText}>
                    Ultra+ has your favorite stories
                </div>
                <div id={styles.subText}>
                    A collection of new and classic anime for anyone to enjoy.
                </div>
                <div id={styles.showContainer}>
                    <div id={styles.showImage} style={{ backgroundImage: `url(https://img3.hulu.com/user/v3/artwork/9c91ffa3-dc20-48bf-8bc5-692e37c76d88?base_image_bucket_name=image_manager&base_image=747157b1-4581-414a-959f-c4956ebc3349&region=US&format=jpeg&size=952x536)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}/>
                    <div id={styles.showImage} style={{ backgroundImage: `url(https://img4.hulu.com/user/v3/artwork/0921b58c-bef9-4a4d-a677-03ec7745428c?base_image_bucket_name=image_manager&base_image=c6182167-be22-4128-aa41-c52261c53837&size=1200x630&format=jpeg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}/>
                    <div id={styles.showImage} style={{ backgroundImage: `url(https://img1.hulu.com/user/v3/artwork/af54be93-ee11-475c-b786-3543a9a7d4ba?base_image_bucket_name=image_manager&base_image=9c7dd5d7-6578-41d9-abd4-57d410e62ea1&size=1200x630&format=jpeg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}/>
                    <div id={styles.showImage} style={{ backgroundImage: `url(https://img2.hulu.com/user/v3/artwork/2c3e4b00-30d9-434d-bccc-cf346e40e868?base_image_bucket_name=image_manager&base_image=8940a6b8-788b-4683-af9e-b65a3c7fa279&region=US&format=jpeg&size=952x536)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}/>
                    <div id={styles.showImage} style={{ backgroundImage: `url(https://img4.hulu.com/user/v3/artwork/e567be4f-2fd8-4127-bc08-580baad908e3?base_image_bucket_name=image_manager&base_image=a91d87f4-f239-4792-9266-b047a2546dea&region=US&format=jpeg&size=952x536)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}/>
                    <div id={styles.showImage} style={{ backgroundImage: `url(https://img4.hulu.com/user/v3/artwork/c7a08df6-d0d5-4dd3-afff-d1f90133cd4e?base_image_bucket_name=image_manager&base_image=31f90904-d759-496c-82e2-b4c9c145f36a&size=1200x630&format=jpeg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}/>
                    <div id={styles.showImage} style={{ backgroundImage: `url(https://img1.hulu.com/user/v3/artwork/36e318dc-3daf-47fb-8219-9e3cb5cd28f2?base_image_bucket_name=image_manager&base_image=2d0d3308-9323-4716-b7d8-03f171c844af&size=1200x630&format=jpeg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}/>
                    <div id={styles.showImage} style={{ backgroundImage: `url(https://img1.hulu.com/user/v3/artwork/0c265948-3450-40ad-89b4-883af457f36d?base_image_bucket_name=image_manager&base_image=6cb25676-17fe-4ed0-8a3b-bac21face511&region=US&format=jpeg&size=952x536)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}/>
                    <div id={styles.showImage} style={{ backgroundImage: `url(https://img4.hulu.com/user/v3/artwork/77477b5f-905c-492f-a6a2-087fd4f85a15?base_image_bucket_name=image_manager&base_image=44651417-ab88-4504-a37b-b55e953271d4&size=1200x630&format=jpeg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}/>
                </div>
            </div>
        </>
    );
}

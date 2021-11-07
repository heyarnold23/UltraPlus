import React from 'react';
import styles from './Footer.module.css'


export default function Footer() {
    return (
        <>
            <div id={styles.footerDiv}>
                {/* <div id={styles.picDiv}> */}
                <div id={styles.pic} />
                {/* </div> */}
                <div id={styles.devDiv}>
                    <div id={styles.dev}>
                        Developed by Arnold Cabang
                    </div>
                </div>
                <div id={styles.linksDiv}>
                    <a className={styles.icon} href="https://github.com/heyarnold23" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                    <a className={styles.icon} href="https://www.linkedin.com/in/arnold-cabang-jr-615932216" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </div>
            </div>
        </>
    );
}

import React from 'react';
import styles from "./ImgBox.module.scss";
import portraitImg from '../../assets/headshot.png'

const ImgBox = () => {
return( 
        <div className={styles.flex}>
            <div className={styles.flexBox}><img className={styles.headshot} src={portraitImg} alt=""></img></div>
        </div>
    )
}

export default ImgBox
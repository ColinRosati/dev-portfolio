import React from 'react';
import portraitImg from '../../assets/headshot.png'

const ImgBox = () => {
return( 
        <div className="flex">
            <div className="flex-box"><img className="headshot" src={portraitImg} alt=""></img></div>
        </div>
    )
}

export default ImgBox
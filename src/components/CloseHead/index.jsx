import React from 'react';
import tapOrClick from 'react-tap-or-click';

import styles from './CloseHead.module.scss';
import closeImg from '../../assets/cancel-button.png';

const CloseHead = (props) => {

  const handleClick = (event) => {
    document.body.classList.add('hide');
    setTimeout(() => {
      window.location = '/';
    }, 500);
  };

  return (
    <div className='close-wrapper' {...tapOrClick(handleClick)}>
      <img  src={closeImg} className={styles.closeButton} alt=''></img>
    </div>
  );
};

export default CloseHead;

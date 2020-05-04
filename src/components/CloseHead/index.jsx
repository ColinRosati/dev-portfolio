import React from 'react';
import { Link } from 'react-router-dom'

import styles from './CloseHead.module.scss';
import closeImg from '../../assets/cancel-button.png';

const CloseHead = (props) => {

  return (
    <Link to={'/'} className='close-wrapper'>
      <img  src={closeImg} className={styles.closeButton} alt=''></img>
    </Link>
  );
};

export default CloseHead;

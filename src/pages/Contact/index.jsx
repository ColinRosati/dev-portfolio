import React from 'react';

import styles from './Contact.module.scss';
import CloseHead from '../../components/CloseHead';
import FadeTransition from '../../components/FadeTransition'

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <CloseHead />
      <div className={styles.header}>colin.james.rosti@gmail.com</div>
    </div>
  );
};

export default FadeTransition(Contact);

import React from 'react';

import styles from './Contact.module.scss';
import CloseHead from '../../components/CloseHead';

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <CloseHead />
      <div className={styles.header}>colin.james.rosti@gmail.com</div>
    </div>
  );
};

export default Contact;

import React from 'react';

import styles from './Contact.module.scss';
import CloseHead from '../../components/CloseHead';
import FadeTransition from '../../components/FadeTransition';
import Link from '../../components/Link';

import { mailTo } from './mail';

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <CloseHead />
      <div className={styles.header}>
        <Link
          canAnimate
          name="colin.james.rosati@gmail.com"
          href={mailTo}
        />
      </div>
    </div>
  );
};

export default FadeTransition(Contact);

import React from 'react';

import styles from './Link.module.scss';

const Link = ({ href, name, canAnimate }) => {
  const style = canAnimate && styles.href;
  return (
    <a className={style} href={href} target="_blank" rel="noopener noreferrer">{name}</a>
  )
};
  
export default Link;
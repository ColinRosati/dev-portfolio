import React from 'react'
import styles from './LinkTitle.module.scss'

const LinkTitle = (url) =>{
    return (
      <div className={styles.NavLinkWrapper}>
        <a href={url.href} className={styles.linkStyle}>
          {url.children}
        </a>
      </div>    
    );
}

  export default LinkTitle;
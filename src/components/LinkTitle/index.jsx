import React from 'react'
import { Link } from 'react-router-dom'
import styles from './LinkTitle.module.scss'

const LinkTitle = (props) =>{
    return (
      <div className={styles.NavLinkWrapper}>
        <Link to={props.href} className={styles.linkStyle}>
          {props.children}
        </Link>
      </div>    
    );
}

  export default LinkTitle;
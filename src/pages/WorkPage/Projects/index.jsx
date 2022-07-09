import React from 'react';

import Link from "../../../components/Link";

import styles from './Projects.module.scss';

const Projects = (props) => {
    return (
      <div>
        <div className={styles.project}>
          <div className={styles.projectHead}>
            <Link href={props.link} name={props.head} canAnimate={false}/>
          </div>
          <div className={styles.projectContent}>
            <p>{props.details}</p>
          </div>
        </div>
        <hr></hr>
      </div>
    );
  };

  export default Projects;
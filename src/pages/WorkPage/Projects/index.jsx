import React from 'react';
import styles from './Projects.module.scss'

const Projects = (props) => {
    return (
      <div>
        <div className={styles.project}>
          <div className={styles.projectHead}>
            <a href={props.link}>{props.head}</a>
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
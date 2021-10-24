import React from 'react';
import styles from './WorkPage.module.scss';
import Projects from './Projects'
import CloseHead from '../../components/CloseHead';
import FadeTransition from '../../components/FadeTransition'

const WorkPage = () => {
  return (
    <div >
      <CloseHead />
        <div className={styles.workHead}>
        <h1>Recent Projects</h1>
        <Projects
          head={'Universal Basic Income Directory'}
          link={'https://colinrosati1.github.io/ubi/'}
          linkTitle={'Universal Basic Income Directory'}
          details={
            'Design, Development → React, Typescript, Storybook, SCSS, HTML, NPM, Webpack '
          }
        />
        <Projects
          head={'Sensor Data visualization App'}
          link={'https://github.com/ColinRosati1/smart-steel-app'}
          linkTitle={'Sensor Data visualization App'}
          details={
            'Design, Development → React, Highcharts, HTML, NPM, Jest, Python, Flask'
          }
        />
        <Projects
          head={'Hotel finder App'}
          link={'https://github.com/ColinRosati1/hotelpirates'}
          linkTitle={'Hotel Finder App'}
          details={'Design, Development → ES6, HTML, Webpack, Jest, Puppeteer'}
        />
        <Projects
          head={'Bunker3'}
          link={'https://www.bunker3.ca'}
          linkTitle={'Bunker3'}
          details={'Design, Development → D3.js, HTML, ES6'}
        />
        <Projects
          head={'FTI Scope Data Collector web app'}
          link={'https://github.com/ColinRosati1/data_collector'}
          linkTitle={'Raspberry PI Server'}
          details={'Design, Development  →  Node.js, Bash scripts'}
        />
      </div>
    </div>
  );
};

export default FadeTransition(WorkPage);

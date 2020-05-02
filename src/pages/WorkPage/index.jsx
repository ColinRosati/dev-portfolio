import React from 'react';
import styles from './WorkPage.module.scss';
import Projects from './Projects'

const WorkPage = () => {
  return (
    <div >
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
          head={'Agar Studio'}
          link={'http://www.agarstudio.com'}
          linkTitle={'AGAR'}
          details={'Development → Wordpress, ES6'}
        />
        <Projects
          head={'FTI Scope Data Collector web app'}
          link={'https://github.com/ColinRosati1/data_collector'}
          linkTitle={'Raspberry PI Server'}
          details={'Design, Development  →  Node.js, Bash scripts'}
        />
        <Projects
          head={'Custom Contact Page'}
          link={
            'http://www.agarstudio.com/wp-content/themes/agar/avalanche/agar-avalanche.html'
          }
          linkTitle={'AGAR'}
          details={'Development → Worpress, ES6'}
        />
        <Projects
          head={'Gnothi Sauton'}
          link={'https://www.gnothisauton.xyz'}
          linkTitle={'Gnothi Sauton'}
          details={'Design, Development → HTML, Bootstrap, ES6'}
        />
        <Projects
          head={'Whatify'}
          link={'https://www.whatify.world'}
          linkTitle={'Whatify'}
          details={'Design, Development → HTML, Bootstrap.js, FaceBook API'}
        />
      </div>
    </div>
  );
};

export default WorkPage;

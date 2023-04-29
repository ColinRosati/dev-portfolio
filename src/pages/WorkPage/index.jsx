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
          head={'GH release script table'}
          link={'https://github.com/ColinRosati/gh-release-table-script/tree/main'}
          linkTitle={'GH rellease script'}
          details={
            'Dev tool→ Release script to improve release process @ Emma sleep'
          }
        />
         <Projects
          head={'Npm package security'}
          link={'https://slides.com/colinrosati/n/fullscreen#/npm-package-secuirity'}
          linkTitle={'Npm package security lightning talk'}
          details={
            'Lighting talk → Slide deck for lighthing talk @ Emma sleep'
          }
        />
          <Projects
          head={'[].filterRemaining()'}
          link={'https://github.com/ColinRosati/Filter-with-remaining'}
          linkTitle={'Filter with remaining Ecmascript proposal'}
          details={
            'Ecmascript Proposal → Filter with Remaining Array method proposal 🤔 ES'
          }
        />
         <Projects
          head={'Fuzzy Search "Auto complete"'}
          link={'https://github.com/ColinRosati/fuzzy-search-input'}
          linkTitle={'Fuzzy Search "Auto complete"'}
          details={
            'Development → React, Typescript, SCSS, HTML'
          }
        />
        <Projects
          head={'Universal Basic Income Directory'}
          link={'https://colinrosati.github.io/ubi/'}
          linkTitle={'Universal Basic Income Directory'}
          details={
            'Design, Development → React, Typescript, Storybook, SCSS, HTML'
          }
        />
        <Projects
          head={'Sensor Data visualization App'}
          link={'https://github.com/ColinRosati/smart-steel-app'}
          linkTitle={'Sensor Data visualization App'}
          details={
            'Design, Development → React, Highcharts, HTML, Jest, Python, Flask'
          }
        />
        <Projects
          head={'Hotel finder App'}
          link={'https://github.com/ColinRosati/hotelpirates'}
          linkTitle={'Hotel Finder App'}
          details={'Design, Development → ES6, HTML, Jest, Puppeteer'}
        />
        <Projects
          head={'Bunker3'}
          link={'https://colinrosati.github.io/bunker3/'}
          linkTitle={'Bunker3'}
          details={'Design, Development → D3.js, HTML, ES6'}
        />
        <Projects
          head={'FTI Scope Data Collector web app'}
          link={'https://github.com/ColinRosati/data_collector'}
          linkTitle={'Raspberry PI Server'}
          details={'Design, Development  →  Node.js, Bash scripts'}
        />
      </div>
    </div>
  );
};

export default FadeTransition(WorkPage);

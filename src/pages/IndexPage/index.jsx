import React from 'react';
import { Route } from 'react-router-dom';

import About from '../AboutPage/index';
import WorkPage from '../WorkPage';
import Contact from '../Contact';

import Nav from './Nav';
import CloseHead from '../../components/CloseHead';

const IndexPage = () => {
  return (
    <div>
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/index' component={IndexPage} />
      <Route exact path='/about' component={About} />
      <Route exact path='/work' component={WorkPage} />
      <CloseHead />
      <Nav />
    </div>
  );
};

export default IndexPage;

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import About from './pages/AboutPage/index';
import WorkPage from './pages/WorkPage';
import Contact from './pages/Contact';
import IndexPage from './pages/IndexPage';
import store from './store/store';
import ToastUISkills from './components/ToasterUI'

import styles from './index.scss';

export default () => {
    return (
      <Provider store={store}>
         <CSSTransition in={false} timeout={1000} classNames={{ ...styles }}>
         <Router basename={'/dev-portfolio/'}>
         <Route render={({ location }) => (
            <Switch location={location}>
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/' component={IndexPage} />
              <Route exact path='/about' component={About} />
              <Route exact path='/work' component={WorkPage} />
            </Switch>
        )} />
          <ToastUISkills />
          </Router>
          </CSSTransition>
      </Provider>
    )
}

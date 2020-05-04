import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import About from './pages/AboutPage/index';
import WorkPage from './pages/WorkPage';
import Contact from './pages/Contact';
import IndexPage from './pages/IndexPage';
import store from './store/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
         <Router>
         <Route render={({ location }) => (
            <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="fade"
              timeout={700}
            >
            <Switch location={location}>
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/' component={IndexPage} />
              <Route exact path='/about' component={About} />
              <Route exact path='/work' component={WorkPage} />
            </Switch>
            </CSSTransition>
        </TransitionGroup>
        )} />
          </Router>
      </Provider>
    );
  }
}

export default App;

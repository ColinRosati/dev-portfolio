import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import IndexPage from './pages/IndexPage';
import About from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import Contact from './pages/Contact';
import NotFound from './pages/404';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={IndexPage} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/index' component={IndexPage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/work' component={WorkPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;

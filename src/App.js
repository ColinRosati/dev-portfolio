import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from './store/store';
import IndexPage from './pages/IndexPage';

class App extends React.Component {
  render() {
    console.log('store', store);
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/:filter?' component={IndexPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


//Pages
import IndexPage from "./pages/index"
import about from "./pages/AboutPage"
import WorkPage from "./pages/WorkPage"
import NotFound from "./pages/404"


class App extends React.Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/about" component={about} />
          <Route path="/work" component={WorkPage} />
          <Route component={NotFound}/>
          <Link to="/about">about</Link>
        </Switch>
       
      </Router>
  
    )
  }
  

}

export default App;
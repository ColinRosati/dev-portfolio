import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


//Pages
import IndexPage from "./pages/index"
import About from "./pages/AboutPage"
import WorkPage from "./pages/WorkPage"
import NotFound from "./pages/404"


class App extends React.Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/about" component={About} />
          <Route exact path="/work" component={WorkPage} />
          <Route component={NotFound}/>
          {/* <Link to="/about">about</Link> */}
        </Switch>
       
      </Router>
  
    )
  }
  

}

export default App;
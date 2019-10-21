import React from 'react'; 
import '../styles/index.css'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import IndexSite from "./index"

import closeImg from '../assets/cancel-button.png'

const IndexPage = () => {
  
  function CloseImage(props) {
    return <img src={closeImg} className="closeButton" alt-text="image"></img>
  } 

  function CloseHead(props) {

    function handleClick(e) {
        e.preventDefault();
        document.body.classList.add("hide")
        setTimeout(() => {
          // return <Router><Route exact path="/" component={IndexSite} /> </Router>
        }, 500)
    }

    return <CloseImage href={IndexPage} onClick = { handleClick } ></CloseImage>
}

  function HeadTitle(props) {
      return <h1>{props.children}</h1>
  }

  const linkStyle = {
      color: 'black'        
  }

  const linkStyleHover = {
      color: 'blue',
      marginleft: '10px'    
  }

  function hovering(props){
      console.log("hovering")
  }

  function Link(){}

  function LinkTitle(url) {
      return <a href={url.href} 
                style={linkStyle}
                >{url.children}</a>
  }

    // function LinkTitle(url) {
    //     return <Link to={url.href} style={linkStyle}></Link>
    // }

  function LinkTitleHover(url) {
      return <a href={url.href} style={linkStyleHover}>{url.children}</a>
  }

    function Nav (props){
      var aboutL = "about";
      var workL = "work";
      var contactL = "contact";

      return(
          <div  className="content">
          <HeadTitle>Colin Rosati</HeadTitle>
          <LinkTitle href={aboutL} className="navLink" onHover={hovering}><h2>About</h2></LinkTitle>
          <LinkTitle href={workL} className="navLink"><h2>Work</h2></LinkTitle>
          <LinkTitle href={contactL} className="navLink" ><h2>Contact</h2></LinkTitle>
          <LinkTitleHover className="navLink" onMouseEnter={hovering}><h2>Contact</h2></LinkTitleHover>
          </div>
      )
    }

    const AppBody = ()=>{
      return(
        <div>
            <CloseHead/>
            <Nav/>
        </div>
      )
    }
       

  return (
    <div className="App">
    <AppBody/>
    </div>
  )

}

export default IndexPage;
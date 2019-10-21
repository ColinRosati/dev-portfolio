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
    return <img src={closeImg} className="closeButton" alt=""></img>
  } 

  function CloseHead(props) {

    const handleClick = (e) => {
      console.log("close")
        e.preventDefault();
        document.body.classList.toggle("hide")
        setTimeout(() => {
          return <Router><Route exact path="/" component={IndexSite} /> </Router>
        }, 500)
    }

    const handleEnter = (e) => {
      // console.log("enter",e, e.target.className)
        let close =  document.getElementsByClassName('close-wrapper')
        // console.log(close, typeof close, e.target.className)
        // document.getElementsByClassName('close-wrapper')
        var x = document.getElementsByClassName('closeButton')[0]
        console.log(x)
        // document.getElementsByClassName
        // document.getElementById("closerButton").classList.add("rotate");
        x.classlist.add("rotate")
       
    }
    // return <button onClick={handleClick}>cilck</button>
    return (
      <div className="close-wrapper" onClick={handleClick} onMouseEnter={handleEnter} >
        <CloseImage href={IndexPage} ></CloseImage>
      </div>
    )
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

  function LinkTitle(url) {
      return <a href={url.href} style={linkStyle} >{url.children}</a>
  }


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
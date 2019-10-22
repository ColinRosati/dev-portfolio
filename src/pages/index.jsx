import React from 'react'; 
import tapOrClick from 'react-tap-or-click'
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

    // const handleEnter = (e) => {
    //     let close =  document.getElementsByClassName('close-wrapper')
    //     var x = document.getElementsByClassName('closeButton')[0]
    //     console.log(x)
    //     x.classlist.add("rotate")
    // }
    
    const handleClick = (event) => {
      // event.preventDefault();
      document.body.classList.add("hide")
      setTimeout(() => {
        window.location = "/";
      }, 500)
  }

  return (
      <div className="close-wrapper" {...tapOrClick(handleClick) }>
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
          <LinkTitle href={aboutL} className="navLink" onHover={hovering}><h2 className="nav">About</h2></LinkTitle>
          <LinkTitle href={workL} className="navLink"><h2 className="nav">Work</h2></LinkTitle>
          <LinkTitle href={contactL} className="navLink" ><h2 className="nav">Contact</h2></LinkTitle>
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
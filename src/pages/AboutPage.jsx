import React, { useState } from 'react'; 
import styled from 'styled-components';
import tapOrClick from 'react-tap-or-click'
import { ToastContainer, toast } from 'react-toastify';
  // import 'react-toastify/dist/ReactToastify.css';
import ToastUISkills from '../components/toasterUI'
import '../styles/about.css'
import IndexPage from "./index"

import closeImg from '../assets/cancel-button.png'
import portraitImg from '../assets/headshot.png'


const About = () => {
    
  function CloseImage(props) {
    return (
        <a href={props.hrefname}>
            <img src={closeImg} className="closeButton" alt=""></img>
        </a>
    )
}

function CloseHead(props) {

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

  function TextBox(props){
      return(
      <div className="aboutBlock">
          <p>I am a Software Developer that works between art, design and development. Pushing the boundary of digital experiences with creative solutions excites me. My work centers around being critical and endlessly curious. Currently I am based in
          Berlin.
          </p>
      </div>
      )
  }

  function ImgBox(props){
  return( 
          <div className="flex">
              <div className="flex-box"><img className="headshot" src={portraitImg} alt=""></img></div>
          </div>
      )
  }

  function Content(props){
      return(
          <div>
              <TextBox/>
              <ImgBox/>
              <ToastUISkills/>
          </div>
      )
  }

  return (
    <div className="App">
      <CloseHead/>
      <Content/>
    </div>
  )

}

export default About;
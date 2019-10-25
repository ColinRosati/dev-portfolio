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
          <p>I am a Developer that works between development and design. I aim to push the boundary of digital design by making clean and usable code. What excites me most, besides always learning, is developing beautiful experiences. My work arises out of being critical about the world. This means I think about the "bigger picture" asking all of the "why" questions before developing. Yes, I am introspective but also very much a people person excited to share and learn. Currently I am based in
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
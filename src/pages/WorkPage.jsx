import React from 'react'; 
import tapOrClick from 'react-tap-or-click'
import '../styles/work.css'
import IndexPage from "./index"

import closeImg from '../assets/cancel-button.png'

const WorkPage = () => {
  
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


  const WorkHead = () => {
    return (
      <div className="work-head"><h1>Recent Projects</h1></div>
    )
  }

  const Projects = (props) => {
    return (
      <div >
      <div className="project">
        <div className="project-head">
        <a href={props.link}><h6>{props.head}</h6></a>
        </div>
        <div className="project-content">
        <a href={props.link}><p>{props.link}</p></a>
        <p>{props.details}</p>
        </div>
        </div>
        <hr></hr>
      </div>
    
    )
  }


  // project -> Project-Head -> Project-link -> Project-detail
  const ProjectBody = () => {
    
    return(
      <div>
        <WorkHead/>
        <Projects head={"Bunker3"} link={"www.bunker3.ca"} details={"Data Visualization →Design, Development, D3.js"}/>
        <Projects head={"Agar Studio"} link={"www.agarstudio.com"} details={"Design Studio →Development"}/>
        <Projects head={"FTI Scope Data Collector web app"} link={"Raspberry PI Server"} details={"Web App & Raspberry Pi server →Design, Development, Node.js, Bash script, SPA"}/>
        <Projects head={"Contact Page"} link={"www.bunker3.ca"} details={"Data Visualization →Design, Development, D3.js"}/>
        <Projects head={"Gnothi Sauton"} link={"gnothisauton.xyz"} details={"Speculative Design → Development, Bootstrap.js"}/>
        <Projects head={"Whatify"} link={"whatify.world"} details={"Speculative Design → Development, Bootstrap.js, FaceBook API"}/>
      </div>
    )
  }

    const AppBody = ()=>{

      
      return(
        <div className="App">
          <CloseHead/>
          <ProjectBody/>
        </div>
      )
    }
       

  return (
    <div className="App">
    <AppBody/>
    </div>
  )

}

export default WorkPage;
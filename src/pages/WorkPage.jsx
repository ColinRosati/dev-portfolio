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
    var linker = "http:// "+ props.link
    return (
      <div >
      <div className="project">
        <div className="project-head">
        <a href={props.link}>{props.head}</a>
        </div>
        <div className="project-content">
        {/* <a href={linker}><p>{props.linkTitle}</p></a> */}
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
        <Projects head={"Bunker3"} link={"https://www.bunker3.ca"} linkTitle={"Bunker3"} details={"Design, Development → D3.js, HTML, ES6"}/>
        <Projects head={"Agar Studio"} link={"http://www.agarstudio.com"} linkTitle={"AGAR"} details={"Development → Wordpress, ES6"}/>
        <Projects head={"FTI Scope Data Collector web app"} link={"https://github.com/ColinRosati1/data_collector"} linkTitle={"Raspberry PI Server"} details={"Design, Development  →  Node.js, Bash scripts"}/>
        <Projects head={"Custom Contact Page"} link={"http://www.agarstudio.com/wp-content/themes/agar/avalanche/agar-avalanche.html"}  linkTitle={"AGAR"} details={"Development → Worpress, ES6"}/>
        <Projects head={"Gnothi Sauton"} link={"https://www.gnothisauton.xyz"} linkTitle={"Gnothi Sauton"} details={"Design, Development → HTML, Bootstrap, ES6"}/>
        <Projects head={"Whatify"} link={"https://www.whatify.world"} linkTitle={"Whatify"} details={"Design, Development → HTML, Bootstrap.js, FaceBook API"}/>
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
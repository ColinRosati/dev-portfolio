import React, { useState, Component } from 'react'; 
import ReactDom from 'react-dom';
import tapOrClick from 'react-tap-or-click'
import '../styles/index.css'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Badge from 'react-bootstrap/Button';

import IndexSite from "./index"

import closeImg from '../assets/cancel-button.png'

const IndexPage = () => {
  var x = 1;
  var y = 1;
  var z = 1;
  
  function CloseImage(props) {
    return <img src={closeImg} className="closeButton" alt=""></img>
  } 

  function CloseHead(props) {

    
    const handleClick = (event) => {
      // event.preventDefault();
      document.body.classList.add("hide")
      document.getElementsByClassName("closeButton").className.add('closeRotate')
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

  // function HoverCount(props, x){
  //   // var [itr, setItr] = useState(1)
  //   // setItr(itr++)
  //   console.log("Vover Counter", props)
  //   x++

  //   return x
  // }

  function LinkTitle(url) {
      //  url.onMouseEnter(url, x)
      return(
      <div className="NavLinkWrapper">
        <a href={url.href} style={linkStyle} >{url.children}</a>
      </div>
      )
  }


  function LinkTitleHover(url) {
      return <a href={url.href} style={linkStyleHover}>{url.children}</a>
  }

    class Nav extends Component{
      constructor(props){
        // this.props = props
        super(props)
        this.aboutL = "about";
        this.workL = "work";
        this.contactL = "contact";
        this.i = 1
        this.state = {
          
          x: 0,
          y: 0,
          z: 0         
        };
        this.HoverCount = this.HoverCount.bind(this);
        this.handleTouchStart = this.handleTouchStart.bind(this);
      }
   
      HoverCount(e){
        if(e.target.innerHTML == 'About'){
          this.setState({
            x: x++,
          });
        }else if(e.target.innerHTML == 'Work'){
          this.setState({
            y: y++,
          });
        }else if(e.target.innerHTML == 'Contact'){
          this.setState({
            z: z++,
          });
        }
      }

      handleTouchStart(e){
        if(e.target.innerHTML == 'About'){
          this.setState({
            x: x++,
          });
        }else if(e.target.innerHTML == 'Work'){
          this.setState({
            y: y++,
          });
        }else if(e.target.innerHTML == 'Contact'){
          this.setState({
            z: z++,
          });
        }
      }
    
      render(){
        var aboutL = "about";
        var workL = "work";
        var contactL = "contact";
        return(
          <div  className="content">
          <HeadTitle>Colin Rosati</HeadTitle>
          <LinkTitle href={this.aboutL} className="navLink"><h2 className="nav" onTouchStart={(e) => this.handleTouchStart(e)} onMouseEnter={(e) => this.HoverCount(e)}>About</h2><Badge variant="secondary">{this.state.x}</Badge></LinkTitle>
          <LinkTitle href={workL} className="navLink" ><h2 className="nav" onTouchStart={(e) => this.handleTouchStart(e)} onMouseEnter={(e) => this.HoverCount(e)}>Work</h2><Badge variant="secondary">{this.state.y}</Badge></LinkTitle>
          <LinkTitle href={contactL} className="navLink" ><h2 className="nav" onTouchStart={(e) => this.handleTouchStart(e)} onMouseEnter={(e) => this.HoverCount(e)}>Contact</h2><Badge variant="secondary">{this.state.z}</Badge></LinkTitle>
          </div>
      )
      }
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
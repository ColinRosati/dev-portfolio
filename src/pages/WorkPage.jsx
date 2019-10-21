import React from 'react'; 
import '../styles/index.css'
// import ReactDOM from 'react-dom';

const WorkPage = () => {
  
  function CloseImage(props) {
    // return <img src="img/cancel-button.png" className="closeButton"></img>
  } 

  function CloseHead(props) {
      function handleClick() {
          document.body.classList.add("hide")
          setTimeout(() => {
              window.location = "file:///C:/Users/colin/Documents/work/Portfolio%20Developer/index.html";
          }, 500)
      }

      return ( 
          <a href = "" onClick = { handleClick } >
              <CloseImage></CloseImage>
          </a >
      );
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

  function LinkTitleHover(url) {
      return <a href={url.href} 
                style={linkStyleHover}
                >{url.children}</a>
  }

    function Nav (props){
      var aboutL = "http://localhost/developerportfolio-react/about.html";
      var workL = "http://localhost/developerportfolio-react/work.html";
      var contactL = "contact.html";

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
        <CloseHead/>,
        <Nav/>
      )
    }
       

  return (
    <div className="App">
    <AppBody/>
    </div>
  )

}

export default WorkPage;
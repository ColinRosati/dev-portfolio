import React from 'react'; 
// import aboutStyles from '../styles/about.css'
// import ReactDOM from 'react-dom';

const AboutPage = () => {
  
  function CloseImage(props) {
    return <img src="../attributes/cancel-button.png" className="closeButton" alt="image"></img>
}

function CloseHead(props) {

    function handleClick() {
        document.body.classList.add("hide")
        setTimeout(() => {
            window.location = "http://localhost/developerportfolio-react/index.html";
        }, 500)
    }

    return ( 
        <a href = "" onClick = { handleClick } >
            <CloseImage></CloseImage>
        </a >
    );
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
              <div className="flex-box"><img className="headshot" src="img/headshot.png"></img></div>
          </div>
      )
  }

  const scroll = window.styled.keyframes`
  100% { 
      -webkit-transform: translateX(-400%);  
    }
  `

  const FootWrapper = window.styled.div`
  margin-top:.7em;
  padding: 0.1em;
  font-size:4em;
  display:flex;
  overflow:hidden;
  width:100vw;
  `;

  const  FooterSkillz = window.styled.div`
  padding: 0.1em;
  color:white;
  background: ${props => props.color};
  transform: translate3d(0, 0, 0);
  animation: ${scroll} 5s linear infinite;
  `;



  function Footer(props){

      return(
          <div className="Footer">
          <FootWrapper>
          <FooterSkillz color="blue">React</FooterSkillz>
          <FooterSkillz color="red">Node</FooterSkillz>
          <FooterSkillz color="yellow">ES6</FooterSkillz>
          <FooterSkillz color="blue">Bootstrap</FooterSkillz> 
          <FooterSkillz color="red">D3.js</FooterSkillz>
          <FooterSkillz color="yellow">CSS</FooterSkillz>
          <FooterSkillz color="blue">SASS</FooterSkillz>
          <FooterSkillz color="red">C</FooterSkillz>
          <FooterSkillz color="yellow">BASH</FooterSkillz>
          <FooterSkillz color="blue">PHP</FooterSkillz> 
          <FooterSkillz color="red">Docker</FooterSkillz>
          <FooterSkillz color="yellow">Javascrip</FooterSkillz> 
          </FootWrapper>
          </div>
      )
  }

  // const ArraySkillz = () => {

  //   return (
  //     <div>
  //       {
  //         [
  //           "Javascript","React","Node","ES6", "Bootstrap","D3","C","PHP", "HTML", "CSS","SASS", "Python", "Bash","Docker"
  //         ].map((skillz, index) => {
  //         return <div key={index}>{skillz}</div>
  //       })}
  //     </div>
  //   )
  // }



  function Content(props){
      return(
          <div>
              <TextBox/>
              <ImgBox/>
              <Footer/>
          </div>
      )
  }




  return (
    <div className="App">
      <CloseHead/>,
      <Content/>
    </div>
  )

}

export default AboutPage;
import React from 'react';

import CloseHead from '../components/CloseHead';
import ImgBox from '../components/ImgBox';
import ToastUISkills from '../components/toasterUI';
import '../styles/about.css';

const About = () => {
  return (
    <div className='App'>
      <CloseHead />
      <div className='aboutBlock'>
        <p>
          I am a Developer that works between 🍯 development and design.
          Currently I am working as a Frontend Developer at Finiata. I aim to
          push the boundary of digital design by making clean and usable code
          ⚡️. I enjoy building PWAs with React & Typescript 🛠. What excites me
          most, besides always learning, is developing beautiful experiences ✨.
          My inspiration rises out of being critical about the world trying to
          solve problems. This means I think about the "bigger picture" asking
          all of the "why" questions before developing. Yes, I am introspective
          but also very much a people person excited to share and learn 🔮.
          Currently I am based in Berlin where I make installation art, cook and
          garden.
        </p>
      </div>
      <ImgBox />
      <ToastUISkills />
    </div>
  );
};

export default About;

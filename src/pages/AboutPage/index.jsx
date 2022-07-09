import React from 'react';

import ImgBox from '../../components/ImgBox';
import CloseHead from '../../components/CloseHead';
import Emoji from '../../components/Emoji'
import FadeTransition from '../../components/FadeTransition'
import styles from './AboutPage.module.scss'

const About = () => {
  return (
    <div >
      <CloseHead />
      <div className={styles.aboutBlock}>
        <p>
          I am a Developer that works between <Emoji symbol="🍯"/> development and design.
          Currently I am working as a Frontend Developer at <a className={styles.href} href="https://team.emma-sleep.com/">Emma Sleep</a>. I aim to
          push the boundary of digital design by making clean and usable code
          <Emoji symbol="⚡️"/>. I enjoy building PWAs & SSG sites with React, Vue <Emoji symbol="&"/> Typescript <Emoji symbol="🛠"/>. What excites me
          most, besides always learning, is developing beautiful experiences <Emoji symbol="✨"/>.
          My inspiration rises out of being critical about the world trying to
          solve problems. This means I think about the "bigger picture" asking
          all of the "why" questions before developing. Yes, I am introspective
          but also very much a people person excited to share and learn <Emoji symbol="🔮"/>.
          Currently I am based in Berlin where I make installation art, cook and
          garden.
        </p>
      </div>
      <ImgBox />
    </div>
  );
};

export default FadeTransition(About);


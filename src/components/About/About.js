import React from 'react';
import Slide from 'react-reveal/Slide';

import './About.css';
import SvgLayout from '../SvgLayout/SvgLayout';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useStateValue } from '../../StateProvider';

function About() {
  const [{ darkMode }] = useStateValue();
  return (
    <div className={darkMode ? 'about dark__mode-1' : 'about light__mode-1'}>
      <SvgLayout />
      <Slide right>
        <SectionTitle name="About Me" />
      </Slide>

      <Slide left>
        <p className="about__text">
          Hi, I'm Moses Ogbopina, a Frontend Developer with over 3 years of
          experience. I graduated from the
          department of Computer Science in the University of Port Harcourt. 
          <br />
          I love to design and build Scalable Web Applications that
          met Accessabilty standards and also responsive across a wide range of
          devices. I love challenges and learning new skills and tools, if
          there’s something I don’t know, I will learn it. 
          Although a Frontend Developer at heart, i like to dabble in the Backend side of things on the weekend.
        </p>
      </Slide>
      <Slide right>
        <p className="about__text">
          If you don't find me on my desk clicking away at my keyboard, you'll find me catching up on the lastest in video games and anime.
        </p>
      </Slide>
    </div>
  );
}

export default About;

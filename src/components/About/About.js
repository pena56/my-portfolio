import React from 'react';
import Slide from 'react-reveal/Slide';

import './About.css';
import SvgLayout from '../SvgLayout/SvgLayout';
import SectionTitle from '../SectionTitle/SectionTitle';

function About() {
  return (
    <div className="about">
      <SvgLayout />
      <Slide right>
        <SectionTitle name="About Me" />
      </Slide>

      <Slide left>
        <p className="about__text">
          Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo
          eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Sed
          porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit.
          Praesent sapien massa, convallis a pellentesque nec, egest suada.
          Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus
          nibh. Curabitur aliquet quam id dui posuere blandit. Praesent sapien
          massa, convallis a pellentesque nec, egest as non nisi.
        </p>
      </Slide>
      <Slide right>
        <p className="about__text">
          Nul feugiat. Sed porttitor lectus
          nibh. Curabitur aliquet quam id dui posuere blandit. Praesent sapien
          massa, convallis a pellentesque nec, egest as non nisi.
        </p>
      </Slide>
    </div>
  );
}

export default About;

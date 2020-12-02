import React from 'react';
import Slide from 'react-reveal/Slide';
import Tada from 'react-reveal/Tada';

import htmlLogo from 'super-tiny-icons/images/svg/html5.svg';
import reactLogo from 'super-tiny-icons/images/svg/react.svg';
import javascriptLogo from 'super-tiny-icons/images/svg/javascript.svg';
import pythonLogo from 'super-tiny-icons/images/svg/python.svg';
import djangoLogo from 'super-tiny-icons/images/svg/djangoproject.svg';
import gitLogo from 'super-tiny-icons/images/svg/git.svg';

import './Skills.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import SvgLayout from '../SvgLayout/SvgLayout';

import cssLogo from '../../img/css-3.svg';
import bootstrapLogo from '../../img/bootstrap.svg';
import nextjsLogo from '../../img/nextjs.svg';
import bemLogo from '../../img/bem.svg';
import reduxLogo from '../../img/redux.svg';
import tailwindLogo from '../../img/tailwindcss.svg';


function Skills() {
  return (
    <div className="skills">
      <SvgLayout />
      <Slide left>
        <SectionTitle name="Skills" />
      </Slide>
      <div className="skills__list">
        <Tada delay="500">
          <div className="skill__item">
            <img className="skill__image" src={htmlLogo} alt="html logo" />
          </div>
        </Tada>

        <Tada delay="1000">
          <div className="skill__item">
            <img className="skill__image" src={cssLogo} alt="css logo" />
          </div>
        </Tada>

        <Tada delay="1500">
          <div className="skill__item">
            <img className="skill__image" src={bemLogo} alt="bem logo" />
          </div>
        </Tada>

        <Tada delay="2000">
          <div className="skill__item">
            <img
              className="skill__image"
              src={bootstrapLogo}
              alt="bootstrap logo"
            />
          </div>
        </Tada>

        <Tada delay="2500">
          <div className="skill__item">
            <img
              className="skill__image"
              src={tailwindLogo}
              alt="tailwind logo"
            />
          </div>
        </Tada>

        <Tada delay="3000">
          <div className="skill__item">
            <img
              className="skill__image"
              src={javascriptLogo}
              alt="javascript logo"
            />
          </div>
        </Tada>

        <Tada delay="3500">
          <div className="skill__item">
            <img className="skill__image" src={reactLogo} alt="react logo" />
          </div>
        </Tada>

        <Tada delay="4000">
          <div className="skill__item">
            <img className="skill__image" src={nextjsLogo} alt="nextjs logo" />
          </div>
        </Tada>

        <Tada delay="4500">
          <div className="skill__item">
            <img className="skill__image" src={reduxLogo} alt="redux logo" />
          </div>
        </Tada>

        <Tada delay="5000">
          <div className="skill__item">
            <img className="skill__image" src={pythonLogo} alt="python logo" />
          </div>
        </Tada>

        <Tada delay="5500">
          <div className="skill__item">
            <img className="skill__image" src={djangoLogo} alt="django logo" />
          </div>
        </Tada>

        <Tada delay="6000">
          <div className="skill__item">
            <img className="skill__image" src={gitLogo} alt="git logo" />
          </div>
        </Tada>
      </div>
    </div>
  );
}

export default Skills;

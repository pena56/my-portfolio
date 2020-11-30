import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import Jump from 'react-reveal/Jump';

import './Hero.css';
import CodeEditor from '../CodeEditor/CodeEditor';

function Hero() {
  return (
    <div className="hero">
      <div className="hero__details">
        <Jump delay={3700}>
          <p className="hero__details-text">Hello everybody, i am</p>
        </Jump>
        <h1 className="hero__details-text">Moses Ogbopina</h1>
        <p className="hero__details-text">Frontend developer</p>
        <p>
          Some details about my humble self bla bla bla bla blal bla bbla
          roljvmo j9 about my humble self bla bla bla bla blal bla bbla roljvmo
          j98orejmo jio enijm; of ji8orejmo jio enijm; of jip of
        </p>
        <div>
          <PhoneIcon />
          <span>(+234) 909 4873 272</span>
        </div>
        <div>
          <MailIcon />
          <span>ogbopinamoses@gmail.com</span>
        </div>
        <div>
          <HomeIcon />
          <span>Port Harcourt, Nigeria (GMT +1)</span>
        </div>
      </div>
      <CodeEditor />
    </div>
  );
}

export default Hero;

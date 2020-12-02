import React from 'react';

import githubLogo from 'super-tiny-icons/images/svg/github.svg';
import twitterLogo from 'super-tiny-icons/images/svg/twitter.svg';
import facebookLogo from 'super-tiny-icons/images/svg/facebook.svg';
import linkedinLogo from 'super-tiny-icons/images/svg/linkedin.svg';

import './Header.css';

function Header() {
  return (
    <nav className="header">
      <p className="header__brand">&lt; M.O /&gt;</p>
      <div className="header__items">
        <a
          className="header__items-icon"
          href="https://www.linkedin.com/in/moses-ogbopina/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon__image" src={linkedinLogo} alt="linkedin" />
        </a>
        <a
          className="header__items-icon"
          href="https://github.com/pena56"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon__image" src={githubLogo} alt="github" />
        </a>
        <a
          className="header__items-icon"
          href="https://twitter.com/pena_mo56"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon__image" src={twitterLogo} alt="twitter" />
        </a>
        <a
          className="header__items-icon"
          href="https://web.facebook.com/moses.ogbopina"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon__image" src={facebookLogo} alt="facebook" />
        </a>
      </div>
    </nav>
  );
}

export default Header;

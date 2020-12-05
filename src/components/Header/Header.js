import React from 'react';

import githubLogo from 'super-tiny-icons/images/svg/github.svg';
import twitterLogo from 'super-tiny-icons/images/svg/twitter.svg';
import facebookLogo from 'super-tiny-icons/images/svg/facebook.svg';
import linkedinLogo from 'super-tiny-icons/images/svg/linkedin.svg';

import './Header.css';
import { useStateValue } from '../../StateProvider';

function Header() {
  const [{ darkMode }, dispatch] = useStateValue();
  const toogleMode = () => {
    dispatch({
      type: 'SET_MODE',
    });
  };
  return (
    <nav className={darkMode ? 'header dark__mode-1' : 'header light__mode-1'}>
      <p className="header__brand">
        &lt; <span>M.O</span> /&gt;
      </p>
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
        <div className="toggle-container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={toogleMode}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
        </div>
      </div>
    </nav>
  );
}

export default Header;

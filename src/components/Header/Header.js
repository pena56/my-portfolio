import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import './Header.css';

function Header() {
  return (
    <nav className="header">
      <div className="header__brand">&lt; M.O /&gt;</div>
      <div className="header__items">
        <a
          className="header__items-icon"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          className="header__items-icon"
          href="www.yahoo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
      </div>
    </nav>
  );
}

export default Header;

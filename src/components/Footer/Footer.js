import React from 'react';

import './Footer.css';
import { useStateValue } from '../../StateProvider';

function Footer() {
  const [{darkMode}] = useStateValue()
  return (
    <div className={darkMode ? 'footer dark__mode-1' : 'footer light__mode-1'}>
      <p className="footer__text">
        copyright&copy;2020 <span>moses ogbopina</span> all rights reserved
      </p>
    </div>
  );
}

export default Footer;

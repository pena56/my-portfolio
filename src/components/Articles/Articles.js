import React from 'react';
import Slide from 'react-reveal';
import Pulse from 'react-reveal';

import './Articles.css';
import SvgLayout from '../SvgLayout/SvgLayout';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useStateValue } from '../../StateProvider';

import prettier from '../../img/articles/prettier.jpeg';
import django from '../../img/articles/django.jpeg';
import heroku from '../../img/articles/heroku.jpeg';
import clap from '../../img/clap.png';

function Articles() {
  const [{ darkMode }] = useStateValue();
  return (
    <div
      className={darkMode ? 'articles dark__mode-1' : 'articles light__mode-1'}
    >
      <SvgLayout />
      <Slide right>
        <SectionTitle name="Articles" />
      </Slide>
      <div className="articles__list">
        <Pulse>
          <div className="article">
            <img className="article__cover" src={heroku} alt="article" />
            <p className="article__title">
              <a href="https://medium.com/bithubph/how-to-deploy-your-django-applications-on-heroku-8b58fdb09dd0">
                How to deploy your Django Applications on Heroku
              </a>
            </p>
            <p className="article__author">
              Moses Ogbopina,{' '}
              <span className="article__clap">
                <img className="clap__icon" src={clap} alt="clap" />
              </span>
              84
            </p>
            <p className="article__date">Oct 29, 2019</p>
          </div>
        </Pulse>

        <Pulse>
          <div className="article">
            <img className="article__cover" src={django} alt="article" />
            <p className="article__title">
              <a href="https://medium.com/bithubph/how-to-install-django-on-windows-with-ease-7bd599a04b56">
                How To Install Django On Windows With Ease
              </a>
            </p>
            <p className="article__author">
              Moses Ogbopina,{' '}
              <span className="article__clap">
                <img className="clap__icon" src={clap} alt="clap" />
              </span>
              55
            </p>
            <p className="article__date">May 2, 2019</p>
          </div>
        </Pulse>

        <Pulse>
          <div className="article">
            <img className="article__cover" src={prettier} alt="article" />
            <p className="article__title">
              <a href="https://medium.com/@ogbopinamoses/how-to-install-jsprettier-in-sublime-text-f22b0f77380e">
                How to install JsPrettier in Sublime Text
              </a>
            </p>
            <p className="article__author">
              Moses Ogbopina,{' '}
              <span className="article__clap">
                <img className="clap__icon" src={clap} alt="clap" />
              </span>
              58
            </p>
            <p className="article__date">Apr 10, 2019</p>
          </div>
        </Pulse>
      </div>
      <a
        target="_blank"
        href="https://medium.com/@ogbopinamoses"
        className="see__more"
        rel="noopener noreferrer"
      >
        See More...
      </a>
    </div>
  );
}

export default Articles;

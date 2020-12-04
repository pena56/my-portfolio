import React from 'react';
import Slide from 'react-reveal';
import Pulse from 'react-reveal';

import './Articles.css';
import SvgLayout from '../SvgLayout/SvgLayout';
import SectionTitle from '../SectionTitle/SectionTitle';

import prettier from '../../img/articles/prettier.jpeg';
import django from '../../img/articles/django.jpeg';
import heroku from '../../img/articles/heroku.jpeg';
import clap from '../../img/clap.png';

function Articles() {
  return (
    <div className="articles">
      <SvgLayout />
      <Slide right>
        <SectionTitle name="Articles" />
      </Slide>
      <div className="articles__list">
        <Pulse>
          <div className="article">
            <img className="article__cover" src={heroku} alt="article image" />
            <p className="article__title">
              How to deploy your Django Applications on Heroku
            </p>
            <p className="article__author">
              Moses Ogbopina,{' '}
              <span className="article__clap">
                <img className="clap__icon" src={clap} alt="clap" />
              </span>
              84
            </p>
            <p className="article__date">Apr 10, 2019</p>
          </div>
        </Pulse>

        <Pulse>
          <div className="article">
            <img className="article__cover" src={django} alt="article image" />
            <p className="article__title">
              How To Install Django On Windows With Ease
            </p>
            <p className="article__author">
              Moses Ogbopina,{' '}
              <span className="article__clap">
                <img className="clap__icon" src={clap} alt="clap" />
              </span>
              84
            </p>
            <p className="article__date">Apr 10, 2019</p>
          </div>
        </Pulse>

        <Pulse>
          <div className="article">
            <img
              className="article__cover"
              src={prettier}
              alt="article image"
            />
            <p className="article__title">
              How to install JsPrettier in Sublime Text
            </p>
            <p className="article__author">
              Moses Ogbopina,{' '}
              <span className="article__clap">
                <img className="clap__icon" src={clap} alt="clap" />
              </span>
              84
            </p>
            <p className="article__date">Apr 10, 2019</p>
          </div>
        </Pulse>
      </div>
      <a
        target="_blank"
        href="https://medium.com/@ogbopinamoses"
        className="see__more"
      >
        See More...{' '}
      </a>
    </div>
  );
}

export default Articles;

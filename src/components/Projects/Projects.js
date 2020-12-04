import React from 'react';
import Slide from 'react-reveal/Slide';

import htmlLogo from 'super-tiny-icons/images/svg/html5.svg';
import javascriptLogo from 'super-tiny-icons/images/svg/javascript.svg';
import pythonLogo from 'super-tiny-icons/images/svg/python.svg';
import djangoLogo from 'super-tiny-icons/images/svg/djangoproject.svg';
import githubLogo from 'super-tiny-icons/images/svg/github.svg';

import './Projects.css';
import SvgLayout from '../SvgLayout/SvgLayout';
import SectionTitle from '../SectionTitle/SectionTitle';

import bookstore from '../../img/screenshots/book-store.png';
import netflix from '../../img/screenshots/netflix-clone.png';
import freshpepper from '../../img/screenshots/fresh-pepper.png';
import omoki from '../../img/screenshots/omoki.png';
import chatRoom from '../../img/screenshots/chat-room.png';
import imagesearch from '../../img/screenshots/image-search.png';

import reduxLogo from '../../img/redux.svg';
import materialLogo from '../../img/material-ui.svg';
import cssLogo from '../../img/css-3.svg';
import reactLogo from '../../img/react.svg';
import nextjsLogo from '../../img/nextjs.svg';
import bemLogo from '../../img/bem.svg';
import tailwindLogo from '../../img/tailwindcss.svg';
import firebaseLogo from '../../img/firebase.svg';
import herokuLogo from '../../img/heroku-icon.svg';

function Projects() {
  return (
    <div className="projects">
      <SvgLayout />
      <Slide left>
        <SectionTitle name="Projects" />
      </Slide>

      <div className="projects__list">
        <div className="project">
          <img className="project__image" src={bookstore} alt="bookstore" />
          <div className="project__desc">
            <div className="project__details">
              <p className="project__title">BookStore</p>
              <p className="project__info">
                Sed porttitor lectus nibh. Donec rutrum congue leo eget
                malesuada. Pellentesque in ipsum id orci porta dapibus. Quisque
                velit nisi, pretium ut lacinia in, elementum id enim. Quisque
                velit nisi, pretium ut lacinia in, elementum id enim. Vestibu
                ngue leo eget malesuada. Pellentesque in ipsum id orci porta
                dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id
                enim. Quisq enim. Vestibu ngue leo eget malesuada. Pellentesque
                in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut
                lacinia in, elementum id enim. Quisque velit nisi, pretium ut
                lacinia in, elementum id enim. Vestibulum ac diam sit
              </p>
              <div className="project__stacks">
                <img
                  className="project__svg"
                  src={reduxLogo}
                  alt="redux logo"
                />
                <img
                  className="project__svg"
                  src={materialLogo}
                  alt="redux logo"
                />
                <img
                  className="project__svg"
                  src={reactLogo}
                  alt="redux logo"
                />
                <img
                  className="project__svg"
                  src={javascriptLogo}
                  alt="redux logo"
                />
                <img className="project__svg" src={bemLogo} alt="redux logo" />
                <img
                  className="project__svg"
                  src={firebaseLogo}
                  alt="redux logo"
                />
              </div>
              <div className="project__buttons">
                <a
                  href="https://github.com/pena56/book-store"
                  className="project__button"
                >
                  Github Repo
                </a>
                <a href="#" className="project__button">
                  View App
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <img className="project__image" src={netflix} alt="bookstore" />
          <div className="project__desc">
            <div className="project__details">
              <p className="project__title">Netflix Clone</p>
              <p className="project__info">
                Sed porttitor lectus nibh. Donec rutrum congue leo eget
                malesuada. Pellentesque in ipsum id orci porta dapibus. Quisque
                velit nisi, pretium ut lacinia in, elementum id enim. Quisque
                velit nisi, pretium ut lacinia in, elementum id enim. Vestibu
                ngue leo eget malesuada. Pellentesque in ipsum id orci porta
                dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id
                enim. Quisq enim. Vestibu ngue leo eget malesuada. Pellentesque
                in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut
                lacinia in, elementum id enim. Quisque velit nisi, pretium ut
                lacinia in, elementum id enim. Vestibulum ac diam sit
              </p>
              <div className="project__stacks">
                <img
                  className="project__svg"
                  src={materialLogo}
                  alt="redux logo"
                />
                <img
                  className="project__svg"
                  src={reactLogo}
                  alt="redux logo"
                />
                <img
                  className="project__svg"
                  src={javascriptLogo}
                  alt="redux logo"
                />
                <img className="project__svg" src={bemLogo} alt="redux logo" />
                <img
                  className="project__svg"
                  src={firebaseLogo}
                  alt="redux logo"
                />
              </div>
              <div className="project__buttons">
                <a
                  href="https://github.com/pena56/book-store"
                  className="project__button"
                >
                  Github Repo
                </a>
                <a href="#" className="project__button">
                  View App
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <img className="project__image" src={freshpepper} alt="bookstore" />
          <div className="project__desc">
            <div className="project__details">
              <p className="project__title">Freshpepper</p>
              <p className="project__info">
                Sed porttitor lectus nibh. Donec rutrum congue leo eget
                malesuada. Pellentesque in ipsum id orci porta dapibus. Quisque
                velit nisi, pretium ut lacinia in, elementum id enim. Quisque
                velit nisi, pretium ut lacinia in, elementum id enim. Vestibu
                ngue leo eget malesuada. Pellentesque in ipsum id orci porta
                dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id
                enim. Quisq enim. Vestibu ngue leo eget malesuada. Pellentesque
                in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut
                lacinia in, elementum id enim. Quisque velit nisi, pretium ut
                lacinia in, elementum id enim. Vestibulum ac diam sit
              </p>
              <div className="project__stacks">
                <img
                  className="project__svg"
                  src={materialLogo}
                  alt="redux logo"
                />
                <img
                  className="project__svg"
                  src={reactLogo}
                  alt="redux logo"
                />
                <img
                  className="project__svg"
                  src={javascriptLogo}
                  alt="redux logo"
                />
                <img className="project__svg" src={bemLogo} alt="redux logo" />
                <img
                  className="project__svg"
                  src={firebaseLogo}
                  alt="redux logo"
                />
              </div>
              <div className="project__buttons">
                <a
                  href="https://github.com/pena56/book-store"
                  className="project__button"
                >
                  Github Repo
                </a>
                <a href="#" className="project__button">
                  View App
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <img className="project__image" src={omoki} alt="bookstore" />
          <div className="project__desc">
            <div className="project__details">
              <p className="project__title">Omoki</p>
              <p className="project__info">
                Sed porttitor lectus nibh. Donec rutrum congue leo eget
                malesuada. Pellentesque in ipsum id orci porta dapibus. Quisque
                velit nisi, pretium ut lacinia in, elementum id enim. Quisque
                velit nisi, pretium ut lacinia in, elementum id enim. Vestibu
                ngue leo eget malesuada. Pellentesque in ipsum id orci porta
                dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id
                enim. Quisq enim. Vestibu ngue leo eget malesuada. Pellentesque
                in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut
                lacinia in, elementum id enim. Quisque velit nisi, pretium ut
                lacinia in, elementum id enim. Vestibulum ac diam sit
              </p>
              <div className="project__stacks">
                <img className="project__svg" src={cssLogo} alt="redux logo" />
                <img className="project__svg" src={htmlLogo} alt="redux logo" />
                <img
                  className="project__svg"
                  src={javascriptLogo}
                  alt="redux logo"
                />
                <img
                  className="project__svg"
                  src={pythonLogo}
                  alt="redux logo"
                />
                <img
                  className="project__svg"
                  src={djangoLogo}
                  alt="redux logo"
                />
                <img
                  className="project__svg"
                  src={herokuLogo}
                  alt="redux logo"
                />
              </div>
              <div className="project__buttons">
                <a
                  href="https://github.com/pena56/book-store"
                  className="project__button"
                >
                  Github Repo
                </a>
                <a href="#" className="project__button">
                  View App
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <img className="project__image" src={chatRoom} alt="bookstore" />
          <div className="project__desc">
            <div className="project__details">
              <p className="project__title">ChatRoom</p>
              <p className="project__info">
                Sed porttitor lectus nibh. Donec rutrum congue leo eget
                malesuada. Pellentesque in ipsum id orci porta dapibus. Quisque
                velit nisi, pretium ut lacinia in, elementum id enim. Quisque
                velit nisi, pretium ut lacinia in, elementum id enim. Vestibu
                ngue leo eget malesuada. Pellentesque in ipsum id orci porta
                dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id
                enim. Quisq enim. Vestibu ngue leo eget malesuada. Pellentesque
                in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut
                lacinia in, elementum id enim. Quisque velit nisi, pretium ut
                lacinia in, elementum id enim. Vestibulum ac diam sit
              </p>
              <div className="project__stacks">
                <img
                  className="project__svg"
                  src={materialLogo}
                  alt="redux logo"
                />
                <img
                  className="project__svg"
                  src={reactLogo}
                  alt="redux logo"
                />
                <img
                  className="project__svg"
                  src={javascriptLogo}
                  alt="redux logo"
                />
                <img className="project__svg" src={bemLogo} alt="redux logo" />
                <img
                  className="project__svg"
                  src={firebaseLogo}
                  alt="redux logo"
                />
              </div>
              <div className="project__buttons">
                <a
                  href="https://github.com/pena56/book-store"
                  className="project__button"
                >
                  Github Repo
                </a>
                <a href="#" className="project__button">
                  View App
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <img className="project__image" src={imagesearch} alt="bookstore" />
          <div className="project__desc">
            <div className="project__details">
              <p className="project__title">ImageSearch</p>
              <p className="project__info">
                Sed porttitor lectus nibh. Donec rutrum congue leo eget
                malesuada. Pellentesque in ipsum id orci porta dapibus. Quisque
                velit nisi, pretium ut lacinia in, elementum id enim. Quisque
                velit nisi, pretium ut lacinia in, elementum id enim. Vestibu
                ngue leo eget malesuada. Pellentesque in ipsum id orci porta
                dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id
                enim. Quisq enim. Vestibu ngue leo eget malesuada. Pellentesque
                in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut
                lacinia in, elementum id enim. Quisque velit nisi, pretium ut
                lacinia in, elementum id enim. Vestibulum ac diam sit
              </p>
              <div className="project__stacks">
                <img
                  className="project__svg"
                  src={nextjsLogo}
                  alt="redux logo"
                />
                <img
                  className="project__svg"
                  src={javascriptLogo}
                  alt="redux logo"
                />
                <img
                  className="project__svg"
                  src={tailwindLogo}
                  alt="redux logo"
                />
                <img className="project__svg" src={bemLogo} alt="redux logo" />
                <img
                  className="project__svg"
                  src={firebaseLogo}
                  alt="redux logo"
                />
              </div>
              <div className="project__buttons">
                <a
                  href="https://github.com/pena56/book-store"
                  className="project__button"
                >
                  Github Repo
                </a>
                <a href="#" className="project__button">
                  View App
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

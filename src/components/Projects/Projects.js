import React from 'react';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

import htmlLogo from 'super-tiny-icons/images/svg/html5.svg';
import javascriptLogo from 'super-tiny-icons/images/svg/javascript.svg';
import pythonLogo from 'super-tiny-icons/images/svg/python.svg';
import djangoLogo from 'super-tiny-icons/images/svg/djangoproject.svg';

import './Projects.css';
import SvgLayout from '../SvgLayout/SvgLayout';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useStateValue } from '../../StateProvider';

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
  const [{ darkMode }] = useStateValue();
  return (
    <div
      className={darkMode ? 'projects dark__mode-2' : 'projects light__mode-2'}
    >
      <SvgLayout />
      <Slide left>
        <SectionTitle name="Projects" />
      </Slide>

      <div className="projects__list">
        <Zoom top>
          <div className="project">
            <img className="project__image" src={bookstore} alt="bookstore" />
            <div className="project__desc">
              <div className="project__details">
                <p className="project__title">BookStore</p>
                <p className="project__info">
                  An Ecommerce application for a book store where users can view
                  a selection of books and make their purchases online. The
                  Application was built for learning purposes and i learnt how
                  to use redux in a react application to act as a global store.
                  The books were gotten from the Google books API.
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
                  <img
                    className="project__svg"
                    src={bemLogo}
                    alt="redux logo"
                  />
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
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Repo
                  </a>
                  <a
                    href="https://book-store-680b6.web.app/"
                    className="project__button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Zoom>

        <Zoom top>
          <div className="project">
            <img className="project__image" src={netflix} alt="bookstore" />
            <div className="project__desc">
              <div className="project__details">
                <p className="project__title">Netflix Clone</p>
                <p className="project__info">
                  A React application for viewing the titles of movie, the
                  application was built as a model to Netflix. Movies were
                  gotten from TMDB API. Styling was accomplished using
                  Material-ui library.
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
                  <img
                    className="project__svg"
                    src={bemLogo}
                    alt="redux logo"
                  />
                  <img
                    className="project__svg"
                    src={firebaseLogo}
                    alt="redux logo"
                  />
                </div>
                <div className="project__buttons">
                  <a
                    href="https://github.com/pena56/netflix-clone"
                    className="project__button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Repo
                  </a>
                  <a
                    href="https://netflix-clone-2cc40.web.app/"
                    className="project__button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Zoom>

        <Zoom top>
          <div className="project">
            <img className="project__image" src={freshpepper} alt="bookstore" />
            <div className="project__desc">
              <div className="project__details">
                <p className="project__title">Freshpepper</p>
                <p className="project__info">
                  A Movie Listing React Application Used TMDB API to get
                  information about movies and also to play the trailer of a
                  selected movie. Used React-Router to add routing to the Single
                  page application
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
                  <img
                    className="project__svg"
                    src={bemLogo}
                    alt="redux logo"
                  />
                  <img
                    className="project__svg"
                    src={firebaseLogo}
                    alt="redux logo"
                  />
                </div>
                <div className="project__buttons">
                  <a
                    href="https://github.com/pena56/fresh-pepper-v2"
                    className="project__button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Repo
                  </a>
                  <a
                    href="https://netflix-clone-2cc40.web.app/"
                    className="project__button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Zoom>

        <Zoom top>
          <div className="project">
            <img className="project__image" src={omoki} alt="bookstore" />
            <div className="project__desc">
              <div className="project__details">
                <p className="project__title">Omoki</p>
                <p className="project__info">
                  An Event Organizer Application, where i used Html, CSS, and
                  JavaScript to design the frontend of the application I also
                  Used Django to develop the backend of the application Used
                  Postgress Database for creating models. Used Material
                  Bootstrap for UI components.
                </p>
                <div className="project__stacks">
                  <img
                    className="project__svg"
                    src={cssLogo}
                    alt="redux logo"
                  />
                  <img
                    className="project__svg"
                    src={htmlLogo}
                    alt="redux logo"
                  />
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
                    href="https://github.com/pena56/omoki"
                    className="project__button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Repo
                  </a>
                  <a
                    href="https://omoki.herokuapp.com/"
                    className="project__button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Zoom>

        <Zoom top>
          <div className="project">
            <img className="project__image" src={chatRoom} alt="bookstore" />
            <div className="project__desc">
              <div className="project__details">
                <p className="project__title">ChatRoom</p>
                <p className="project__info">
                  A Simple Chat Room application using react and firebase
                  firestore. Feel free to drop a message in the room.
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
                  <img
                    className="project__svg"
                    src={bemLogo}
                    alt="redux logo"
                  />
                  <img
                    className="project__svg"
                    src={firebaseLogo}
                    alt="redux logo"
                  />
                </div>
                <div className="project__buttons">
                  <a
                    href="https://github.com/pena56/chat-room"
                    className="project__button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Repo
                  </a>
                  <a
                    href="https://messenger-clone-cf5cb.web.app/"
                    className="project__button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Zoom>

        <Zoom top>
          <div className="project">
            <img className="project__image" src={imagesearch} alt="bookstore" />
            <div className="project__desc">
              <div className="project__details">
                <p className="project__title">ImageSearch</p>
                <p className="project__info">
                  A Next.js Application using Tailwind css and Pixabay API. Also
                  added a search functionality for finding images,
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
                  <img
                    className="project__svg"
                    src={bemLogo}
                    alt="redux logo"
                  />
                  <img
                    className="project__svg"
                    src={firebaseLogo}
                    alt="redux logo"
                  />
                </div>
                <div className="project__buttons">
                  <a
                    href="https://github.com/pena56/image-search"
                    className="project__button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Repo
                  </a>
                  <a
                    href="https://image-search-ea2d0.web.app/"
                    className="project__button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default Projects;

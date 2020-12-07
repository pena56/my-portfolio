import React, { useState, useEffect } from 'react';
import Slide from 'react-reveal/Slide';
import phoneLogo from 'super-tiny-icons/images/svg/phone.svg';
import gmailLogo from 'super-tiny-icons/images/svg/gmail.svg';
import googlemapsLogo from 'super-tiny-icons/images/svg/google_maps.svg';

import './Hero.css';
import CodeEditor from '../CodeEditor/CodeEditor';
import ContactButton from '../Contact/ContactButton';
import { useStateValue } from '../../StateProvider';

function Hero() {
  const [{ darkMode }] = useStateValue();

  const [greeting, setGreeting] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [about, setAbout] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setGreeting(
        <Slide left>
          <p className="hero__text hero__greeting">Hello, i am</p>
        </Slide>
      );
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setName(
        <Slide left>
          <h1 className="hero__text hero__name">Moses Ogbopina</h1>
        </Slide>
      );
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPosition(
        <Slide left>
          <p className="hero__text hero__position">a Frontend developer</p>
        </Slide>
      );
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAbout(
        <Slide left>
          <p className="hero__about">
            A design Oriented Frontend Developer, with a Knack for Problem
            Solving
          </p>
        </Slide>
      );
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhone(
        <Slide left>
          <div className="hero__contacts">
            <img src={phoneLogo} alt="phone" className="svg__icon" />
            <span>(+234) 815 2067 550</span>
          </div>
        </Slide>
      );
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEmail(
        <Slide left>
          <div className="hero__contacts">
            <img src={gmailLogo} alt="gmail" className="svg__icon" />
            <span>ogbopinamoses@gmail.com</span>
          </div>
        </Slide>
      );
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLocation(
        <Slide left>
          <div className="hero__contacts">
            <img src={googlemapsLogo} alt="location" className="svg__icon" />
            <span>Port Harcourt, Nigeria (GMT +1)</span>
          </div>
        </Slide>
      );
    }, 16000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContact(
        <Slide bottom>
          <ContactButton />
        </Slide>
      );
    }, 18000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={darkMode ? 'hero dark__mode-2' : 'hero light__mode-2'}>
      <div className="hero__details">
        {greeting}
        {name}
        {position}
        {about}
        {phone}
        {email}
        {location}
        {contact}
      </div>
      <CodeEditor />
    </div>
  );
}

export default Hero;

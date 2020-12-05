import React from 'react';

import './Contact.css';
import ContactButton from './ContactButton';
import SvgLayout from '../SvgLayout/SvgLayout';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useStateValue } from '../../StateProvider';

function Contact() {
  const [{ darkMode }] = useStateValue();
  return (
    <div
      className={darkMode ? 'contact dark__mode-2' : 'contact light__mode-2'}
    >
      <SvgLayout />
      <SectionTitle name="Contact" />
      <div className="contact__items">
        <p className="contact__text">
          Want to chat about coding, life or how awesome Naruto is, Drop a
          message.
        </p>
        <ContactButton />
      </div>
    </div>
  );
}

export default Contact;

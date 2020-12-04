import React from 'react'

import './Contact.css';
import ContactButton from './ContactButton';
import SvgLayout from '../SvgLayout/SvgLayout';
import SectionTitle from '../SectionTitle/SectionTitle';

function Contact() {
  return (
    <div className="contact">
      <SvgLayout />
      <SectionTitle name="Contact" />
      <div className="contact__items">
        <p className="contact__text">Want to chat about coding, life or how awesome Naruto is, Drop a message.</p>
        <ContactButton />
      </div>
    </div>  
  )
}

export default Contact

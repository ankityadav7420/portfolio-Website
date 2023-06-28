import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contacts = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm('service_m7fo4xm', 'template_9pagm2x', form.current, '9IppWUbayWhwPDerL')
      .then((result) => {
        console.log(result.text);
        setSending(false);
        setSent(true);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
        setSending(false);
      });
  };

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span>Get in Touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
        </div>
      </div>
      {/* right side */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" required />
          <input type="email" name="user_email" className="user" placeholder="Email" required />
          <input type="textarea" name="message" className="user" placeholder="Message" required />
          <input type="submit" value={sending ? 'Sending...' : 'Send'} className="button" disabled={sending} />
          {sent && <span>Thanks for Contacting!! Will reach you soon</span>}
          <div className="blur c-blur" style={{ background: 'var(--purple)' }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;

import React from 'react';
import { Link } from 'react-router-dom';

const ContactUsScreen = () => {
  return (
    <section className="contactUs">
      <div className="pageTitle">
        <h2>CONTACT US</h2>
      </div>
      <div className="contact-form">
        <div className="front">
          <h1 className="title">Are you an Artist?</h1>
          <ul className="contact-list">
            <li>
              Do cupidatat occaecat nisi duis consequat id aute mollit eiusmod
              proident qui.
            </li>
            <li>
              Do cupidatat occaecat nisi duis consequat id aute mollit eiusmod
              proident qui.
            </li>
            <li>
              Do cupidatat occaecat nisi duis consequat id aute mollit eiusmod
              proident qui.
            </li>
          </ul>
          <h1 className="title">Regestration Form</h1>
          <p>Fill and submit the form to get started.</p>
          <p>
            Your account email and password will sent to you by email within no
            time.
          </p>
          <p>
            <strong>Provide your valid name and email address</strong>
          </p>
          <form action="">
            <label className="form__label" for="name">
              Full Name
            </label>
            <input className="form__text" type="text" id="name" name="name" />
            <label className="form__label" for="email">
              Valid Email Address
            </label>
            <input
              className="form__text"
              type="email"
              id="email"
              name="email"
            />
            <label className="form__label" for="message">
              Message
            </label>
            <textarea
              className="form__text"
              type="textarea"
              id="message"
              name="message"
              rows="8"
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsScreen;

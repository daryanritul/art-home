import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { sendContactUsFormDetailsFun } from "../action/home";

const ContactUsScreen = ({ sendContactUsFormDetailsFun }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [quearyOrRegistration, setQuearyOrRegistration] = useState("Queary");
  const [isDataSend, setIsDataSend] = useState(false);
  const handelSubmit = (e) => {
    e.preventDefault();
    sendContactUsFormDetailsFun({
      name,
      email,
      message,
      quearyOrRegistration,
      setIsDataSend,
    });
    console.log("Function Call");
  };

  useEffect(() => {
    if (isDataSend) {
      setName("");
      setEmail("");
      setMessage("");
    }
  }, [isDataSend]);

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
          <form onSubmit={(e) => handelSubmit(e)}>
            <label className="form__label" for="name">
              Full Name
            </label>
            <input
              className="form__text"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="form__label" for="email">
              Valid Email Address
            </label>
            <input
              className="form__text"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="form__label" for="email">
              Queary / Registration
            </label>
            <select
              name="quearyOrRegistration"
              id="quearyOrRegistration"
              className="form__text"
              value={quearyOrRegistration}
              onChange={(e) => setQuearyOrRegistration(e.target.value)}
            >
              <option value="Queary">Queary</option>
              <option value="Registration">Registration</option>
            </select>
            <label className="form__label" for="message">
              Message
            </label>
            <textarea
              className="form__text"
              type="textarea"
              id="message"
              name="message"
              rows="8"
              maxLength="500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button>Submit</button>
          </form>

          {/* div to show user that fome is succesfful submit */}
          {isDataSend && (
            <div>
              <h1>Fome Submit</h1>
              <button onClick={() => setIsDataSend(false)}>Close</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  sendContactUsFormDetailsFun: (data) => sendContactUsFormDetailsFun(data),
};

export default connect(null, mapDispatchToProps)(ContactUsScreen);

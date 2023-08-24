import React, { useState, useRef } from "react";
import "./Contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [purpose, setPurpose] = useState("");
  const { t } = useTranslation("global");

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const purposeRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phoneNumber || !address || !purpose) {
      if (!name) nameRef.current.focus();
      else if (!email) emailRef.current.focus();
      else if (!phoneNumber) phoneRef.current.focus();
      else if (!address) addressRef.current.focus();
      else purposeRef.current.focus();

      console.log(t("contact.messages.emptyField"));
    } else {
      console.log(t("contact.messages.success"));
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Phone Number:", phoneNumber);
      console.log("Address:", address);
      console.log("Purpose:", purpose);
      setName("")
      setEmail("")
      setPhoneNumber("")
      setPurpose("")
      setAddress("")
    }
  };

  return (
    <div className="top">
      <div className="contact-form">
        <h2>{t("contact.heading")}</h2>
        <form onSubmit={handleSubmit}>
          <label>{t("contact.name")}:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={nameRef}
          />

          <label>{t("contact.email")}:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
          />

          <label>{t("contact.phoneNumber")}:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            ref={phoneRef}
          />

          <label>{t("contact.address")}:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            ref={addressRef}
          />

          <label>{t("contact.purpose")}:</label>
          <textarea
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            ref={purposeRef}
          />

          <button type="submit">{t("contact.submit")}</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

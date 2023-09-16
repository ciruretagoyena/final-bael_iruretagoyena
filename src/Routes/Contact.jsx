import React from "react";
import Form from "../Components/Form";
import "../Contact.css";

const Contact = ({ theme }) => {
  const containerClass = theme === "dark" ? "contact-container-dark" : "contact-container-light";
  const titleClass = theme === "dark" ? "contact-title-dark" : "contact-title-light";
  const textClass = theme === "dark" ? "contact-text-dark" : "contact-text-light";

  return (
    <div className={containerClass}>
      <h2 className={titleClass}>¿Queres saber más?</h2>
      <p className={textClass}>Envianos tus preguntas y te contactaremos</p>
      <Form />
    </div>
  );
};

export default Contact;

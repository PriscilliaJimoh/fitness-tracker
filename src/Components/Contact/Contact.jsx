import React from "react";
import "../../global.css";
import "./Contact.css";
const ContactPage = () => {
  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    var data = {};
    formData.forEach(value, (key) => (data[key] = value));
    console.log("df");
  };

  return (
    <div className="contact-container">
      <p>CONTACT</p>
      <br />
      <h3> Leave us a note. </h3>
      <p>For help with any enquiry including .... , please contact us </p>
      <form onSubmit={handleEnquirySubmit}>
        <input type="text" name="firstname" placeholder="NAME" />
        <br />
        <input type="email" name="firstname" placeholder="EMAIL" />
        <br />
        <input type="text" name="tel" placeholder="PHONE NUMBER" />
        <br />
        <input type="text" name="message" placeholder="MESSAGE" />
      </form>
    </div>
  );
};

export default ContactPage;

import React from "react";
import "./contact-us-section.scss";
// Components
import ContactForm from "./contact-form";

const ContactUsSection = (props) => (
  <section className="default-section contact-us-section">
    <div className="container">
      <h2 className="section-title">Contact us</h2>
      <ContactForm
        btnText="Send us"
        reviewGoal={{ id: "1111", goal: "blog-post" }}
      />
    </div>
  </section>
);

export default ContactUsSection;

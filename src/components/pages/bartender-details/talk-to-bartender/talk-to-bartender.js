import React from "react";
import "./talk-to-bartender.scss";
// Components
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from "../../../reusable-components/TextInput";
import RippleButton from "../../../reusable-components/Button";

const TalkToBartender = ({ bartenderDetails: { name, surname, id } }) => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <section className="default-section talkToBartender">
      <div className="container">
        <h2 className="section-title">Talk to {name + " " + surname}</h2>
      </div>
      <div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form className="talkToBartenderForm" noValidate>
            <TextInput name="name" type="text" placeholder="Name" />
            <TextInput name="email" type="email" placeholder="Email" />
            <TextInput
              name="message"
              type="text"
              placeholder="Message"
              textarea={true}
            />
            <RippleButton type="submit">Send Message</RippleButton>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default TalkToBartender;

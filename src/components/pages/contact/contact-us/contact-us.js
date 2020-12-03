import React from "react";
import "./contact-us.scss";
// Components
import * as Yup from "yup";
import { Form, Formik } from "formik";
import TextInput from "../../../reusable-components/text-input";
import RippleButton from "../../../reusable-components/ripple-button";
// Actions
import { userSendMessage } from "../../../../actions/user";
// Utils
import { connect } from "react-redux";

const ContactUs = ({ userSendMessage }) => {
  const handleSubmit = (values) => userSendMessage(values);

  return (
    <section className="default-section contactUs">
      <div className="container">
        <h2 className="section-title">Contact us</h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(3, "Must be at least 3 characters")
              .required("This field is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("This field is required"),
            message: Yup.string()
              .min(10, "Must be at least 10 characters")
              .required("This field is required"),
          })}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty }) => (
            <Form className="contactUs__form" noValidate>
              <TextInput name="name" type="text" placeholder="Name" />
              <TextInput name="email" type="email" placeholder="Email" />
              <TextInput
                name="message"
                type="text"
                placeholder="Message"
                textarea={true}
              />
              <RippleButton type="submit" disabled={!isValid || !dirty}>
                Send Message
              </RippleButton>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default connect(null, { userSendMessage })(ContactUs);

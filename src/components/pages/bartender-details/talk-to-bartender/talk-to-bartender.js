import React from "react";
import "./talk-to-bartender.scss";
// Components
import { Formik, Form } from "formik";
import TextInput from "../../../reusable-components/text-input";
import RippleButton from "../../../reusable-components/ripple-button";
import * as Yup from "yup";

const TalkToBartender = ({ bartenderDetails, sendMessageToBartender }) => {
  const handleSubmit = (values) =>
    sendMessageToBartender(bartenderDetails?.id, values);

  return (
    <section className="default-section talkToBartender">
      <div className="container">
        <h2 className="section-title">
          Talk to {bartenderDetails?.name + " " + bartenderDetails?.surname}
        </h2>
      </div>
      <div>
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
            <Form className="talkToBartenderForm" noValidate>
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

export default TalkToBartender;

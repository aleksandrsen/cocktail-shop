import React from "react";
import "./talk-to-bartender.scss";
// Actions
import { sendMessageToBartender } from "../../../../actions/bartenders";
// Components
import { Formik, Form } from "formik";
import TextInput from "../../../reusable-components/TextInput";
import RippleButton from "../../../reusable-components/Button";
import * as Yup from "yup";
// Utils
import { connect } from "react-redux";

const TalkToBartender = ({
  sendMessageToBartender,
  bartenderDetails: { name, surname, id },
}) => {
  const handleSubmit = (values) => sendMessageToBartender(id, values);

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

export default connect(null, { sendMessageToBartender })(TalkToBartender);

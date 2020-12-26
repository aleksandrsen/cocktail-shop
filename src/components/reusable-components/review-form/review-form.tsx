import React from "react";
import "./review-form.scss";
// Components
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../text-input";
import RippleButton from "../ripple-button";
// Types
import { RequestMessageType } from "../../../types/common";

type AdditionalPropsType = {
  resetForm?: () => void;
};

type ReviewFormPropsType = {
  title?: string;
  handleSubmit: (values: RequestMessageType, {}: AdditionalPropsType) => void;
};

const ReviewForm = ({ handleSubmit, title }: ReviewFormPropsType) => (
  <div className="reviewFormWrapper">
    <h3 className="reviewFormWrapper__title">{title || "Leave review"}</h3>
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
        <Form className="reviewFormWrapper__form" noValidate>
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
);

export default ReviewForm;

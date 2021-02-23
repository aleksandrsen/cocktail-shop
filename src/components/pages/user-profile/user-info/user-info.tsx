import React, { useState } from "react";
import "./user-info.scss";
// Utils
import * as Yup from "yup";
// Components
import { Form, Formik } from "formik";
import TextInput from "../../../reusable-components/text-input";
import RippleButton from "../../../reusable-components/ripple-button";

const UserInfo = () => {
  const [edited, setEdited] = useState(false);
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const handleClick = (submitForm: () => void) => (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (edited) submitForm();
    setEdited(!edited);
  };

  return (
    <section className="default-section userInfo">
      <h2 className="userProfile__title">Personal info</h2>
      <Formik
        initialValues={{
          firstName: "User name",
          lastName: "User last name",
          phone: "+38067893422",
          birthDate: "17.06.1993",
          gender: "male",
          address: "Port city, 3232, NY",
        }}
        onSubmit={handleSubmit}
      >
        {({ submitForm, isValid }) => (
          <Form className="userPersonalInfoForm" noValidate>
            <div className="userPersonalInfoForm__wrapper">
              <TextInput
                name="firstName"
                type="text"
                label="First name"
                disabled={!edited}
              />
              <TextInput
                name="lastName"
                type="text"
                label="Last name"
                disabled={!edited}
              />
              <TextInput
                name="phone"
                type="tel"
                label="Phone number"
                disabled={!edited}
              />
              <TextInput
                name="birthDate"
                type="text"
                label="Date of birth"
                disabled={!edited}
              />
              <TextInput
                name="gender"
                type="text"
                label="Gender"
                disabled={!edited}
              />
              <TextInput
                name="address"
                type="text"
                label="Address"
                disabled={!edited}
              />
            </div>
            <RippleButton
              type="submit"
              onClick={handleClick(submitForm)}
              disabled={!isValid}
            >
              {edited ? "Save" : "Edit"}
            </RippleButton>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default UserInfo;

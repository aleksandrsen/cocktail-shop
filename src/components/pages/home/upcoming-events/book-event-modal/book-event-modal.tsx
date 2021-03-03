import React, { useState } from "react";
import "./book-event-modal.scss";
// Components
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import TextInput from "../../../../reusable-components/text-input";
import ModalWrapper from "../../../../reusable-components/modal-wrapper";
import RippleButton from "../../../../reusable-components/ripple-button/ripple-button";
// Utils
import * as Yup from "yup";
import { connect } from "react-redux";
// Types
import { AppRootState } from "../../../../../store";
import { EventItemType, UserItemType } from "../../../../../types/common";
import { cutTextContent, formatDate } from "../../../../../utils";

type FormValuesType = {
  [key: string]: string;
};

type BookEventModalPropsType = {
  event: EventItemType;
  userInfo?: UserItemType;
};

const BookEventModal = ({
  userInfo,
  event: { title, dateStart, description, id },
}: BookEventModalPropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const handleSubmit = (values: FormValuesType) => {
    console.log(values);
  };

  return (
    <>
      <RippleButton onClick={toggleModal}>Book on event</RippleButton>
      {isOpen && (
        <ModalWrapper isOpen={isOpen} toggleOpen={toggleModal}>
          <div className="bookEventModal">
            <div className="bookEventModal__header">
              Book on event
              <button
                className="bookEventModal__closeBtn"
                onClick={toggleModal}
              >
                <svg width="25" height="25">
                  <use xlinkHref="#close-icon" />
                </svg>
              </button>
            </div>
            <div className="bookEventModal__content">
              <Link
                to={`/music-events/${id}`}
                className="bookEventModal__eventName"
              >
                {title}
              </Link>
              <div className="bookEventModal__eventDate">
                {formatDate(dateStart)}
              </div>
              <p className="bookEventModal__description default-text">
                {cutTextContent(description, 200)}
              </p>
              <Formik
                initialValues={{
                  email: userInfo ? userInfo.email : "",
                  firstName: userInfo ? userInfo.firstName : "",
                  lastName: userInfo ? userInfo.lastName : "",
                  phoneNumber: userInfo ? userInfo.phoneNumber : "",
                }}
                validationSchema={Yup.object({
                  firstName: Yup.string()
                    .min(3)
                    .required("This fields is required"),
                  lastName: Yup.string()
                    .min(3)
                    .required("This fields is required"),
                  phoneNumber: Yup.string().required("This field is required"),
                  email: Yup.string()
                    .email("Invalid email address")
                    .required("This field is required"),
                })}
                onSubmit={handleSubmit}
              >
                {() => (
                  <Form className="bookEventModal__form" noValidate>
                    <TextInput
                      name="firstName"
                      type="text"
                      label="First name"
                    />
                    <TextInput name="lastName" type="text" label="Last name" />
                    <TextInput name="email" type="text" label="Email" />
                    <TextInput name="phoneNumber" type="text" label="Phone" />
                    <RippleButton type="submit">Book on event</RippleButton>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </ModalWrapper>
      )}
    </>
  );
};

export default connect(
  (state: AppRootState) => ({
    userInfo: state.user.userInfo,
  }),
  null
)(React.memo(BookEventModal));

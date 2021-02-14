import * as Yup from "yup";
import { ActiveFormType } from "../auth";

export const validateFields = (activeForm: ActiveFormType) =>
  activeForm.login
    ? {
        email: Yup.string()
          .email("Invalid email address")
          .required("This field is required"),
        password: Yup.string().required("This field is required"),
      }
    : activeForm.signIn
    ? {
        firstName: Yup.string().min(3).required("This fields is required"),
        lastName: Yup.string().min(3).required("This fields is required"),
        phone: Yup.string().required("This field is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("This field is required"),
        password: Yup.string()
          .min(8, "Must be at least 8 characters")
          .required("This field is required"),
      }
    : {
        email: Yup.string()
          .email("Invalid email address")
          .required("This field is required"),
      };

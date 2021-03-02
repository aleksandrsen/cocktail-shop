import React, { useCallback, useState } from "react";
import "./auth.scss";
// Components
import AuthForm from "./auth-form";
import { FieldMetaProps } from "formik";

type AuthPropsType = {
  toggleOpen: () => void;
};

export type ActiveFormType = {
  [key: string]: boolean;
};

const Auth = ({ toggleOpen }: AuthPropsType) => {
  const [savedValues, setSavedValues] = useState({
    email: "",
    password: "",
  });

  const [key, setKey] = useState(0);

  const [activeForm, setActiveForm] = useState<ActiveFormType>({
    login: true,
    signIn: false,
    forgotPassword: false,
  });

  const toggleFormsView = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { value } = (e.target as HTMLButtonElement).dataset;
      const res: ActiveFormType = { ...activeForm };
      for (const key in res) {
        res[key] = false;
        if (key === value) res[key] = true;
      }
      setActiveForm(res);
      setKey(key + 1);
    },
    [activeForm, key]
  );

  const handleSaveValues = useCallback(
    (name: string, meta: FieldMetaProps<void>): void => {
      setSavedValues({ ...savedValues, [name]: meta.value });
    },
    [savedValues]
  );

  return (
    <div className="auth">
      <div className="auth__header">
        <div className="auth__title">
          {activeForm.login
            ? "Log in"
            : activeForm.signIn
            ? "Sign in"
            : "Forgot password"}
          <button className="auth__closeBtn" onClick={toggleOpen}>
            <svg width="25" height="25">
              <use xlinkHref="#close-icon" />
            </svg>
          </button>
        </div>
      </div>
      <div className="auth__content">
        <div className="auth__formsWrapper">
          <AuthForm
            key={key}
            activeForm={activeForm}
            savedValues={savedValues}
            toggleFormsView={toggleFormsView}
            handleSaveValues={handleSaveValues}
          />
        </div>
        <div className="auth__signInWith">
          <div className="subTitle">Sign in with</div>
          <button>
            <svg width="16" height="16" className="facebookIcon">
              <use xlinkHref="#login-facebook" />
            </svg>
            Facebook
          </button>
          <button>
            <svg width="16" height="16">
              <use xlinkHref="#login-google" />
            </svg>
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Auth);

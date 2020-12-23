import React, { ChangeEvent, FormEvent, useState } from "react";
import "./join-mailing-list.scss";
// Components
import RippleButton from "../../../reusable-components/ripple-button";
// Actions
import { addUserToMailingList } from "../../../../actions/user";
// Utils
import { connect } from "react-redux";
import { validateEmail } from "../../../../utils/index";

type JoinMailingListProps = {
  addUserToMailingList: (email: string) => void;
};

const JoinMailingList = ({ addUserToMailingList }: JoinMailingListProps) => {
  const [email, setEmail] = useState("");

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => setEmail(value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!validateEmail(email)) addUserToMailingList(email);
    setEmail("");
  };

  return (
    <form className="joinMailingList" onSubmit={handleSubmit}>
      <label htmlFor="addUserMailingList" className="joinMailingList__label">
        Join mailing list
      </label>
      <div
        className={`inputWrapper ${
          email && validateEmail(email) ? "error" : ""
        }`}
        data-message="Email value is invalid"
      >
        <input
          type="email"
          value={email}
          id="addUserMailingList"
          onChange={handleChange}
        />
      </div>
      <RippleButton type="submit">Sign up</RippleButton>
    </form>
  );
};

export default connect(null, { addUserToMailingList })(
  React.memo(JoinMailingList)
);

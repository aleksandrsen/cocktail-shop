import React, { useState } from "react";
import "./join-mailing-list.scss";
// Components
import RippleButton from "../../../reusable-components/ripple-button";

const JoinMailingList = (props) => {
  const [email, setEmail] = useState("");

  return (
    <form className="joinMailingList">
      <label htmlFor="joinListLabel">Join mailing list</label>
      <input
        type="email"
        value={email}
        id="joinListLabel"
        onChange={(e) => setEmail(e.target.value)}
      />
      <RippleButton>Sign up</RippleButton>
    </form>
  );
};

export default JoinMailingList;

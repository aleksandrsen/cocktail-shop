import React, { useState } from "react";
import "./join-mailing-list.scss";

const JoinMailingList = (props) => {
  let [email, changeEmail] = useState("");

  return (
    <form className="join-mailing-list">
      <label htmlFor="join-list">Join mailing list</label>
      <input
        onChange={(e) => changeEmail((email = e.target.value))}
        type="email"
        value={email}
        id="join-list"
      />
      <button className="default-button">Sign up</button>
    </form>
  );
};

export default JoinMailingList;

import React from "react";
import "./talk-to-bartender.scss";
// Components

const TalkToBartender = ({ bartenderDetails: { name, surname, id } }) => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <section className="default-section talkToBartender">
      <div className="container">
        <h2 className="section-title">Talk to {name + " " + surname}</h2>
      </div>
    </section>

  );
};

export default TalkToBartender;

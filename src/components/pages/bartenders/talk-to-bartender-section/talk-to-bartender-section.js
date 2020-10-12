import React from "react";
import "./talk-to-bartender-section.scss";
// Components
import TalkToBartenderForm from "../talk-to-bartender-form/talk-to-bartender-form";

const TalkToBartenderSection = ({ bartender: { name, surname, id } }) => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <section className="default-section talk-to-bartender-section">
      <div className="container">
        <h2 className="section-title">Talk to {name + " " + surname}</h2>
        <TalkToBartenderForm onSubmit={handleSubmit} />
      </div>
    </section>
  );
};

export default TalkToBartenderSection;

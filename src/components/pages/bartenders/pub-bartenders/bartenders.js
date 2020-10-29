import React from "react";
import "./bartenders.scss";
// Components
import BartendersList from "./bartenders-list";

const PubBartenders = (props) => (
  <section className="default-section pubBartenders">
    <div className="container">
      <h2 className="section-title">Our team</h2>
      <h3 className="section-sub-title">Pub bartenders</h3>
      <p className="default-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deleniti
        dolores eaque et expedita harum hic illo iste modi necessitatibus
        nostrum nulla porro quae quidem repellat soluta tempora, veniam
        veritatis!
      </p>
      <BartendersList />
    </div>
  </section>
);

export default PubBartenders;

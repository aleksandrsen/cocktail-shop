import React from "react";
import "./pub-partners.scss";
import partner1 from "../../../../src_/img/pub-partners/partner-1.png";
import partner2 from "../../../../src_/img/pub-partners/partner-2.png";

const PubPartners = () => (
  <section className="default-section pubPartners">
    <div className="container">
      <h2 className="section-title">Pub partners</h2>
      <p className="default-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deleniti
        dolores eaque et expedita harum hic illo iste modi necessitatibus
        nostrum nulla porro quae quidem repellat soluta tempora, veniam
        veritatis!
      </p>
      <div className="row justify-content-center">
        <div className="col col-4 col-sm-6 col-xs-12">
          <img src={partner1} alt="pub partner img" />
        </div>
        <div className="col col-4 col-sm-12">
          <img src={partner2} alt="pub partner img" />
        </div>
        <div className="col col-4 col-sm-6 col-xs-12">
          <img src={partner1} alt="pub partner img" />
        </div>
      </div>
    </div>
  </section>
);

export default PubPartners;

import React from 'react';
import './pub-partners-section.scss';
// Components
import partner1 from "../../img/pub-partners/partner-1.png"
import partner2 from "../../img/pub-partners/partner-2.png"

function PubPartnersSection(props) {

    return (
        <section className="default-section pub-partners-section">
            <div className="container">
                <h2 className="section-title">Pub partners</h2>
                <p className="default-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deleniti dolores eaque et expedita
                    harum hic illo iste modi necessitatibus nostrum nulla porro quae quidem repellat soluta tempora,
                    veniam veritatis!
                </p>
                <div className="partners">
                    <img src={partner1} alt="pub partner img"/>
                    <img src={partner2} alt="pub partner img"/>
                    <img src={partner1} alt="pub partner img"/>
                </div>
            </div>
        </section>
    );
}

export default PubPartnersSection;

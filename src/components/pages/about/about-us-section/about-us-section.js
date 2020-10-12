import React from "react";
import "./about-us-section.scss";
import { Link } from "react-router-dom";
// Components
import newBottle from "../../../../img/new-bottle.jpg";

const AboutUsSection = (props) => (
  <div className="section about-us-section">
    <div className="container">
      <section className="default-section">About us story</section>
      <h2 className="section-title">The best of history</h2>
      <div className="about-us-section-content">
        <p className="default-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae
          dolorum eos illo quia quibusdam reprehenderit similique voluptate!
          Atque aut modi odio omnis? Animi assumenda doloremque obcaecat
          sapiente totam, ut. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Animi aspernatur, commodi consectetur cupiditate
          error esse eum incidunt inventore labore necessitatibus officia
          pariatur praesentium quaerat rerum sint, tempora unde ut veritatis?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          alias autem blanditiis cupiditate, eius ex fugiat impedit iure iusto
          molestias placeat provident repudiandae rerum sapiente sit tempore
          tenetur unde vel.
        </p>
        <img src={newBottle} alt="new bottle" className="preview-img" />
        <p className="default-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          aspernatur assumenda at cumque est illo laborum, molestias neque quae
          quaerat qui quidem ullam voluptate? Aliquid animi eligendi nemo
          numquam veniam? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Atque autem doloremque eligendi ipsum iste laudantium magni
          maiores perspiciatis placeat sint.
        </p>
        <Link to={"/cocktails/"} className="default-button">
          Our menu
        </Link>
      </div>
    </div>
  </div>
);

export default AboutUsSection;

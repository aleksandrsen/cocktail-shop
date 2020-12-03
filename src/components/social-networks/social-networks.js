import React from "react";
import "./social-networks.scss";
// Utils
import { SocialData } from "../../config/social";

const SocialNetworks = ({ exclude }) => (
  <div className="socialNetworks">
    {SocialData.filter(({ name }) => name !== exclude).map(
      ({ link, icon, name }) => (
        <a key={name} href={link} target="_blank">
          {icon}
        </a>
      )
    )}
  </div>
);

export default SocialNetworks;

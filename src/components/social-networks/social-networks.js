import React from "react";
import "./social-networks.scss";
import { SocialData } from "../../app_constants";

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

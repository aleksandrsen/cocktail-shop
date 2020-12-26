import React from "react";
import "./social-networks.scss";
// Utils
import { SocialData } from "../../config/social";

type SocialNetworksPropsType = {
  exclude?: string;
};

const SocialNetworks = ({ exclude }: SocialNetworksPropsType) => (
  <div className="socialNetworks">
    {SocialData.filter(({ name }) => name !== exclude).map(
      ({ link, iconId, name }) => (
        <a key={name} href={link} target="_blank">
          <svg width="16" height="16">
            <use xlinkHref={iconId} />
          </svg>
        </a>
      )
    )}
  </div>
);

export default React.memo(SocialNetworks);

import React from 'react';
import './share.scss';
// Components
import SocialNetworks from "../social-networks";

function Share(props) {

    return (
        <div className="share">
            <span className="share-title">Share:</span>
            <SocialNetworks/>
        </div>
    );
}

export default Share;
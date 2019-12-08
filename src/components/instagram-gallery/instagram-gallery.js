import React from 'react';
import './instagram-gallery.scss';
import {instagram} from "../../normalize-data/instagram"

function InstagramGallery(props) {

    return (
        <div className="instagram-gallery">
            {
                instagram.map(item => {
                    return <img key={item} src={item} alt="instagram-photo"/>
                })
            }
        </div>
    );
}

export default InstagramGallery;
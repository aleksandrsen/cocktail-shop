import React from 'react';
import './section-title.scss';

function SectionTitle(props) {

    return (
        <h2 className="section-title">
            {props.children}
        </h2>
    );
}

export default SectionTitle;

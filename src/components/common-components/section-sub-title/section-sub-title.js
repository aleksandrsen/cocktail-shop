import React from 'react';
import './section-sub-title.scss';

function SectionSubTitle(props) {

    return (
        <h3 className="section-sub-title">
            {props.children}
        </h3>
    );
}

export default SectionSubTitle;

import React from 'react';
import './small-section.scss';

function SmallSection(props) {

    return (
        <section className={`small-section ${props.className}`}>
            {props.children}
        </section>
    );
}

export default SmallSection;

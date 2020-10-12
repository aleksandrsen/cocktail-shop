import React from 'react';
import './section.scss';

function Section(props) {

    return (
        <section className={`default-section ${props.className || ''}`}>
            {props.children}
        </section>
    );
}

export default Section;

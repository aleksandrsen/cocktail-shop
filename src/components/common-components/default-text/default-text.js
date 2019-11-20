import React from 'react';
import './default-text.scss';

function DefaultText(props) {

    return (
        <p className="default-text">
            {props.children}
        </p>
    );
}

export default DefaultText;

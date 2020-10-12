import React from 'react';
import './default-text.scss';

function DefaultText(props) {
    let {className} = props;

    return (
        <p className={`default-text ${className ? className : ''}`}>
            {props.children}
        </p>
    );
}

export default DefaultText;

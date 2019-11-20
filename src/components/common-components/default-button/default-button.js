import React from 'react';
import './default-button.scss';

function DefaultButton(props) {
    let {isLink, size, linkPath} = props;

    if (isLink) {
        return (
            <a className={`default-button ${size ? size : ''}`} href={linkPath || ''}>
                {props.children}
            </a>
        )
    } else {
        return (
            <button className={`default-button ${size}`}>
                {props.children}
            </button>
        )
    }
}

export default DefaultButton;

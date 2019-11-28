import React from 'react';
import './default-button.scss';

function DefaultButton(props) {
    let {isLink, size, linkPath, type} = props;

    if (isLink) {
        return (
            <a className={`default-button ${size ? size : ''}`} href={linkPath || ''}>
                {props.children}
            </a>
        )
    } else {
        return (
            <button className={`default-button ${size}`} type={type}>
                {props.children}
            </button>
        )
    }
}

export default DefaultButton;

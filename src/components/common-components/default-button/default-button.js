import React from 'react';
import './default-button.scss';

function DefaultButton(props) {
    let {isLink, size, linkPath, type, onClick} = props;
    const handleClick = onClick ? () => onClick() : null;

    if (isLink) {
        return (
            <a className={`default-button ${size ? size : ''}`}
               href={linkPath || ''}
               onClick={handleClick}>
                {props.children}
            </a>
        )
    } else {
        return (
            <button className={`default-button ${size ? size : ''}`}
                    type={type}
                    onClick={handleClick}>
                {props.children}
            </button>
        )
    }
}

export default DefaultButton;

import React from 'react';
import './bartender-item.scss';
// Components
import {Col} from 'antd';

function BartenderItem(props) {
    let {bartenderDetails} = props;
    let {name, surname, img, id} = props.bartender;

    return (
        <Col key={id} span={8}>
            <div className="bartender-item" onClick={() => bartenderDetails()}>
                <img src={img} alt=""/>
                <span className="name">{name} {surname}</span>
            </div>
        </Col>
    );
}

export default BartenderItem;
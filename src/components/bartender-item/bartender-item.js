import React from 'react';
import './bartender-item.scss';
// Components
import {Col} from 'antd';

function BartenderItem(props) {
    let {bartenderDetails} = props;
    let {name, surname, img} = props.bartender;

    return (
        <Col span={8}>
            <div className="bartender-item" onClick={() => bartenderDetails()}>
                <img className="bartender-item-img" src={img} alt=""/>
                <span className="name">{name} {surname}</span>
            </div>
        </Col>
    );
}

export default BartenderItem;
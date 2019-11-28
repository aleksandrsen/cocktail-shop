import React from 'react';
import './bartender-item.scss';
import {Link} from "react-router-dom";
// Components
import {Col} from 'antd';

function BartenderItem(props) {

    let {name, surname, img, id} = props.bartender;
    let bartenderRoute = (name + "-" + surname).toLowerCase();

    return (
        <Col key={id} span={8}>
            <Link to={`/bartenders/${bartenderRoute}`}>
                <div className="bartender-item">
                    <img src={img} alt=""/>
                    <span className="name">{name} {surname}</span>
                </div>
            </Link>
        </Col>
    );
}

export default BartenderItem;
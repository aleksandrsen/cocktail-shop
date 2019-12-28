import React, {useState} from 'react';
import './bartender-item.scss';
// Components
import {Col} from 'antd';
import semanticImg from "../../img/semantic -bartenders.png";

function BartenderItem(props) {
    let {bartenderDetails} = props;
    let {name, surname, img} = props.bartender;
    let [loadImg, setLoad] = useState(false);

    return (
        <Col span={8}>
            <div className="bartender-item" onClick={() => bartenderDetails()}>
                {loadImg ? "" : <img src={semanticImg} alt={name + " " + surname}/>}
                <img className="bartender-item-img" src={img} alt={name + " " + surname} onLoad={(e) => setLoad(true)}/>
                <span className="name">{name} {surname}</span>
            </div>
        </Col>
    );
}

export default BartenderItem;
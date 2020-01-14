import React from "react";
import "./modal.scss";
import {Modal as ModalWindow}  from "antd";

export default function Modal(props) {
    let {visible, setVisible, okText} = props;

    return (
        <div>
            <ModalWindow
                className='modal'
                title="Login"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                bodyStyle={{overflow: 'auto'}}
                okText={okText}
            >
                {props.children}
            </ModalWindow>
        </div>
    )
}
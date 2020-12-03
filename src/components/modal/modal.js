import React from "react";
import "./modal.scss";
// Components
import { Modal as ModalWindow } from "antd";

const Modal = ({ visible, setVisible, okText, children }) => (
  <div>
    <ModalWindow
      className="modal"
      title="Login"
      centered
      visible={visible}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      bodyStyle={{ overflow: "auto" }}
      okText={okText}
    >
      {children}
    </ModalWindow>
  </div>
);

export default Modal;

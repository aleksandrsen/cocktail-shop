import React from "react";
import "./modal-wrapper.scss";
// Utils
import { connect } from "react-redux";
// Components
import Modal from "react-modal";

type AuthPropType = {
  isOpen: boolean;
  className?: string;
  toggleOpen: () => void;
  children: React.ReactNode;
};

const ModalWrapper = ({
  isOpen,
  children,
  className,
  toggleOpen,
}: AuthPropType) => (
  <Modal
    isOpen={isOpen}
    ariaHideApp={false}
    onRequestClose={toggleOpen}
    overlayClassName="modalWrapperOverlay"
    className={`modalWrapper ${className ? className : ""}`}
  >
    {children}
  </Modal>
);

export default connect(null, null)(React.memo(ModalWrapper));

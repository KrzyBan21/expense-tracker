import React from "react";
import "./Modal.scss";

import Container from "../../Container/Container";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ children, modalOpen, onModalOpen }) => {
  const modalAnimation = modalOpen ? " modal--animation" : " ";
  const zIndex = modalOpen ? { zIndex: "1001" } : null;

  return (
    <React.Fragment>
      {modalOpen ? <Backdrop onMenuOpen={onModalOpen} /> : null}
      <div className={"modal" + modalAnimation} style={zIndex}>
        <Container title="Data aggregation" showTitle={true}>
          {children}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Modal;

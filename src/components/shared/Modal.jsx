import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from "../../styles/Modal.module.css";

const ModalOverlay = (props) => {
  return (
    <div className={`${styles.modal} ${props.className}`}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

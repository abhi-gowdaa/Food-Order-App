import ReactDOM from "react-dom";
import React, { Fragment } from "react";
import Classes from "./Modal.module.css";

const BackDrop = (props) => {
  return (<div className={Classes.backdrop}/>)
};

const ModalOverLay = (props) => {
  return (
    <div className={Classes.modal}>
      <div className={Classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    //wrapper
    <Fragment>
      {ReactDOM.createPortal(<BackDrop />, portalElement)}

      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

import ReactDOM from "react-dom";
import React, { Fragment } from "react";
import Classes from "./Modal.module.css";

const BackDrop = (props) => {
  return (<div className={Classes.backdrop} onClose={props.onCloseCart}/>)
};

const ModalOverLay = (props) => {
  return (
    <div className={Classes.modal} onClose={props.onCloseCart}>
      <div className={Classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    //wrapper
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>, portalElement)}

      {ReactDOM.createPortal(
        <ModalOverLay onClose={props.onCloseCart}>{props.children}</ModalOverLay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import classes from './Modal.module.css';
const Backdrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div onClick={props.onClick} className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onHideCart}></Backdrop>,
        document.getElementById('modal-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClick={props.onClick}>{props.children}</ModalOverlay>,
        document.getElementById('modal-root')
      )}
    </Fragment>
  );
};

export default Modal;

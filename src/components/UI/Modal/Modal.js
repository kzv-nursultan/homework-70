import React from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {
  return (
    <>
      <Backdrop show={props.show}/>
      <div
        className="Modal"
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}
      >
        {props.children}
        <button onClick={props.onClick}
        className='mb-3 bg-danger text-white'>
          Close Modal
        </button>
      </div>
    </>
  );
};

export default Modal;
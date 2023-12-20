import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignoutPopup.css'; // Style this file for your signout popup

const SignoutPopup = ({ isOpen, onRequestClose }) => {
  const handleSignOut = () => {
    // ...

    onRequestClose();
  };
  const showToastMessage = () => {
    toast.success("Logout Successful", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div>
      {isOpen && (
        <div className="custom-modal-overlayx">
          <div className="custom-modal-content2x">
            <span className="modal-closex" onClick={onRequestClose}>
              &times;
            </span>
            <h4>Are you sure you want to sign out?</h4>
            <div className="signout-optionsx">
              <button onClick={() => {
  handleSignOut();
  showToastMessage();
}}>Yes</button>
              <ToastContainer />
              <button onClick={onRequestClose}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignoutPopup;

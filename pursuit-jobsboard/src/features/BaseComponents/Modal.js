import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const PJBModal = ({ children, modalIsOpen, modalClose }) => {

  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        //onAfterOpen={afterOpenModal}
        onRequestClose={modalClose}
        contentLabel="Modal"
        className="modal"
        overlayClassName="overlay"
      >
        {children}
      </Modal>
    </div>
  );
}

export default PJBModal;
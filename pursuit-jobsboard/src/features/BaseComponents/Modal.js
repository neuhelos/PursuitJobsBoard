import React from "react";
import Modal from 'styled-react-modal'

const StyledModal = Modal.styled`
  display: flex;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const PJBModal = ({ children, isOpen, toggleModal }) => {

  return (
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}>
        {children}
      </StyledModal>
  );
}

export default PJBModal;
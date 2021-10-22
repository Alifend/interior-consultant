import React from "react";
import styled from "styled-components";

const ModalFrame = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const CloseButton = styled.button`
  background-color: black;
  color: white;
`;
const Modal = ({ clicked }) => {
  return (
    <ModalFrame>
      <CloseButton onClick={clicked}>X</CloseButton>
    </ModalFrame>
  );
};

export default Modal;

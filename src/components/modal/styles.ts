import styled from "styled-components";

export const ModaOverlay = styled.div`
  z-index: 999;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

export const ModalInner = styled.div`
  z-index: 1000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  background-color: #fff;
  min-width: 500px;
  height: auto;
  padding: 15px;
`;

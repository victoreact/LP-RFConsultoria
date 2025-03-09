import styled from "styled-components";

export const FloatingContainer = styled.div`
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
`;


export const Button = styled.button`
  width: 80px;
  height: 80px;
  border: none;
  background: none;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    opacity: 0.8;
  }
`;

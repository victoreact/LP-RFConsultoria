import styled from "styled-components";

export const ContainerHeader = styled.div`
  height: 100px;
  width: 100%;
  padding: 0px 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background-color: #F4F4F2;

  @media (max-width: 1200px) {
    padding: 0px 100px;
  }

  @media (max-width: 768px) {
    padding: 0px 40px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
    gap: 15px;
  }
`;

export const RightDiv = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

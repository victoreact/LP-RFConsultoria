import styled from "styled-components";

export const ContainerSolutions = styled.div`
  height: 581px;
  width: 100%;
  padding: 80px 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 80px;
  text-align: center;

  h1 {
    color: #3C1A51;
    font-family: 'Red Hat Display';
    font-size: 46px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media (max-width: 768px) {
    padding: 40px 20px; 
    gap: 40px; 
    h1 {
      font-size: 32px; 
      display: none;
    }
  }

  @media (max-width: 480px) {
    display: none;
    padding: 20px 10px; 
    gap: 20px; 
    h1 {
      font-size: 24px; 
    
    }
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  width: 1100px;
  height: 300px;

  @media (max-width: 768px) {
    width: 90%; 
    display: none;
    height: auto; 
  }
`;

export const LineCards = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;

  img {
    width: 77px;
  }

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center; 
    gap: 20px; 
    display: none;
  }

  @media (max-width: 480px) {
    img {
      width: 50px; 
      display: none;
    }
  }
`;
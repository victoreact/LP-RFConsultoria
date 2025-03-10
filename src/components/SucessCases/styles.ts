import styled from "styled-components";

export const ContainerSucess = styled.div`
  display: flex;
  width: 100%;
  height: auto; 
  padding: 80px 220px;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  background-color: #3C1A51;

  @media (max-width: 768px) {
    padding: 40px 20px; 
    gap: 40px; 
  }

  @media (max-width: 480px) {
    padding: 20px 10px; 
    gap: 20px; 
  }
`;

export const TitleandSub = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    color: #F4F4F2;
    text-align: center;
    font-family: 'Red Hat Display', sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  p {
    color: #0AD9CA;
    text-align: center;
    font-family: 'Red Hat Display', sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 32px; 
    }

    p {
      font-size: 24px; 
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 24px; 
    }

    p {
      font-size: 20px; 
    }
  }
`;

export const ContainerCardSucess = styled.div`
  display: flex;
  flex-wrap: wrap; 
  align-items: center;
  justify-content: center; 
  gap: 32px;

  @media (max-width: 768px) {
    gap: 24px; 
  }

  @media (max-width: 480px) {
    gap: 16px; 
  }
`;
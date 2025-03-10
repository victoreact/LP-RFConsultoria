import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  height: 566px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: linear-gradient(180deg, #3C1A51 0%, #734490 100%);
  padding: 80px 300px;
  gap: 100px;

  @media (max-width: 1200px) {
    padding: 80px 150px;
    gap: 50px;
  }

  @media (max-width: 1024px) {
    padding: 60px 80px;
    gap: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    text-align: center;
    padding: 50px 40px;
  }

  @media (max-width: 480px) {
    padding: 40px 20px;
  }
`;

export const ContainerLeft = styled.div`
  height: auto;
  width: 525px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 44px;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
  }

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

export const ContainerRight = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
      display: none;
    }
`;

export const TitleAndSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    color: #F4F4F2;
    font-family: 'Red Hat Display', sans-serif;
    font-size: 44px;
    font-style: normal;
    font-weight: 700;
    line-height: 124%;

    @media (max-width: 1024px) {
      font-size: 36px;
    }

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  p {
    color: #F4F4F2;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: 1024px) {
      font-size: 18px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

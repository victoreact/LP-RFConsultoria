import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: 420px;
  height: 80px;
  padding: 20px 32px;
  align-items: center;
  position: relative;

  border-radius: 14px;
  box-shadow: 8px 8px 0px 0px rgba(173, 99, 218, 0.30);
`;

export const CardTitle = styled.h3`
 font-family: 'Poppins';
 text-align: center;
 font-size: 22px;
 font-style: normal;
 font-weight: 600;
 line-height: normal;
`;

export const Popup = styled.div`
    position: absolute;
    top: 130%;
    left: 0%;
    z-index: 10;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.20);

    align-items: center;
    width: 450px;
    height: 180px;
    background: #F4F4F2;
    display: flex;
    padding: 40px 40px 16px 40px;
    border-radius: 14px;
    transition: opacity 1s ease-in-out;

    
  transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;

  p{
    color: #3C1A51;
    font-family: 'Poppins';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
  }
`;

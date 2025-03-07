import styled from "styled-components";

export const BlueContainer = styled.button`
display: flex;
height: 62px;
padding: 0px 40px;
justify-content: center;
align-items: center;

background: linear-gradient(100deg, var(--Blue, #0AD9CA) -21.45%, #6796DD 100%);
border: none;
cursor: pointer;
border-radius: 14px;


&:hover{
    background: linear-gradient(100deg, #8CEBE5 -21.45%, #92B5EA 100%);
    
}



p{
    color: #3C1A51;
    font-family: 'Poppins';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
`;

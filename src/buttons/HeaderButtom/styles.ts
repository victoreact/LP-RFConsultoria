import styled from "styled-components";

export const ContainerHeaderButton = styled.button`

display: flex;
height: 41px;
padding: 0px 34px;
align-items: center;


border-radius: 14px;
border: 1px solid #3C1A51;
cursor: pointer;

&:hover{
    background-color: #3C1A51;
    p{
        color: #F4F4F2;
    }
}

p{
    color: #3C1A51;
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
`;
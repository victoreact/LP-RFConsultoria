import styled from "styled-components";

export const ContainerFooter = styled.div`
height: 274px;
width: 100%;

display: flex;
padding: 80px 220px;
flex-direction: column;
align-items: center;
gap: 24px;
align-self: stretch;
`;

export const LineContent = styled.div`
width: 1000px;
display: flex;
justify-content: space-between;
align-items: center;

img{
   
}

p{
    color: #9B86A8;

    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
}
`;

export const LineDiv = styled.div`
width: 1000px;
height: 1px;
border-top: 1px solid #CCB9D7;


`;

export const Copyright = styled.div`

width: 1000px;
display: flex;
justify-content: space-between;
align-items: center;


p{
    color: #3C1A51;
    font-family: 'Poppins', sans-serif;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
}

img{
    
}

`;
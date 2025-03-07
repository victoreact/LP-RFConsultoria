import styled from "styled-components";

export const ContainerCta = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 662px;
padding: 80px 220px;
justify-content: space-between;
align-items: center;

background: linear-gradient(180deg, #3C1A51 0%, #734490 100%);

`;

export const ContainerSection = styled.div` 
display: flex;
width: 1000px;
height: 502px;
padding: 80px;
justify-items: center;
align-items: center;
gap: 60px;

background-color: #F4F4F2;
border-radius: 14px;
`;

export const TextSection = styled.div`
display: flex;
flex-direction: column;
gap: 48px;

h1{
    color: #3C1A51;
    font-family: 'Red Hat Display', sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
}
p{
    color: #3C1A51;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
   
`;
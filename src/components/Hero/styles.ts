import styled from "styled-components";


export const HeroContainer = styled.div`
display: flex;
height: 566px;
width: 100%;
justify-content: space-between;
align-items: center;
flex-shrink: 0;
background: linear-gradient(180deg, #3C1A51 0%, #734490 100%);
padding: 80px 220px;
`;

export const ContainerLeft = styled.div`
height: 294px;
width: 525px;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 44px;
flex-shrink: 0;
`;

export const ContainerRight = styled.div`

`;

export const TitleAndSubtitle = styled.div`
display: flex;
flex-direction: column;
gap: 20px;

h1{
    color: #F4F4F2;
    font-family: 'Red Hat Display', sans-serif;
    font-size: 44px;
    font-style: normal;
    font-weight: 700;
    line-height: 124%;
}

p{
    color: #F4F4F2;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
`;

export const ImgHero = styled.div`

`;
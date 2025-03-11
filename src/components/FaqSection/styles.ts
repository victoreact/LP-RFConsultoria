import styled from "styled-components";

export const FaqContainer = styled.div`
    display: flex;
    padding: 40px 20px; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px; 
    width: 100%; 

    h1 {
        color: #3C1A51;
        text-align: center;
        font-family: 'Red Hat Display', sans-serif;
        font-size: 2.5rem; 
        font-weight: 700;
        line-height: normal;
    }

    @media (max-width: 768px) {
        padding: 20px; 
    }
`;

export const AgruparFaq = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px; 
    width: 100%; 
`;

export const ContainerContentFaq = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px; 
    padding: 20px; 
    border: 1px solid #DC7344; 
    border-radius: 16px;
    width: 100%; 
    max-width: 600px; 
    margin: 0 auto; 

    h1 {
        color: #DC7344;
        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem; 
        font-weight: 600;
        line-height: 1.2;
    }

    p {
        color: #3C1A51;
        font-size: 1rem; 
        font-weight: 400;
        line-height: 1.5; 
    }

    @media (max-width: 768px) {
        padding: 15px; 
    }
`;
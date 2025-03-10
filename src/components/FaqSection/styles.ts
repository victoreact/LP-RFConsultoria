import styled from "styled-components";

export const FaqContainer = styled.div`
    display: flex;
    padding: 80px 220px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;
    align-self: stretch;

    h1 {
        color: #3C1A51;
        text-align: center;
        font-family: 'Red Hat Display', sans-serif;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    @media (max-width: 768px) {
        display: none; /* Oculta a seção de FAQ em telas menores */
    }
`;

export const AgruparFaq = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const ContainerContentFaq = styled.div`
    display: flex;
    height: 200px;
    padding: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
    border: 1px solid;
    border-radius: 16px;

    h1 {
        color: #DC7344;
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 100%;
    }

    p {
        color: #3C1A51;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;
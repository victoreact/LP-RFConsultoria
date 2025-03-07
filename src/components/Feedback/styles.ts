import styled from "styled-components";

export const FeedbackContainer = styled.div`
height: 844px;
width: 100%;
background: linear-gradient(180deg, var(--White, #F4F4F2) 0%, var(--White, #F4F4F2) 35.49%, var(--Orange, #DC7344) 35.5%, var(--Orange, #DC7344) 64%, var(--White, #F4F4F2) 64.01%, var(--White, #F4F4F2) 100%);
padding: 80px 220px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 60px;

h1{
    color: #3C1A51;
    text-align: center;

    font-family: 'Red Hat Display';
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
`;

export const CardContainerFeedback = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 24px;
align-self: stretch;

`;
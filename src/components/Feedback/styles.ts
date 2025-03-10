import styled from "styled-components";

export const FeedbackContainer = styled.div`
  height: auto; // Permitir que a altura se ajuste automaticamente
  width: 100%;
  background: linear-gradient(180deg, var(--White, #F4F4F2) 0%, var(--White, #F4F4F2) 35.49%, var(--Orange, #DC7344) 35.5%, var(--Orange, #DC7344) 64%, var(--White, #F4F4F2) 64.01%, var(--White, #F4F4F2) 100%);
  padding: 80px 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;

  h1 {
    color: #3C1A51;
    text-align: center;
    font-family: 'Red Hat Display';
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media (max-width: 768px) {
    padding: 40px 20px; // Reduzindo o padding para telas menores
    gap: 40px; // Reduzindo o espaço entre os elementos

    h1 {
      font-size: 32px; // Diminuindo o tamanho da fonte do título
    }
  }

  @media (max-width: 480px) {
    padding: 20px 10px; // Mais redução de padding para celulares
    gap: 20px; // Menor espaço entre os elementos

    h1 {
      font-size: 24px; // Diminuindo ainda mais o tamanho da fonte do título
    }
  }
`;

export const CardContainerFeedback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  align-self: stretch;
  flex-wrap: wrap; // Permitir que os cartões se movam para a próxima linha em telas menores

  @media (max-width: 768px) {
    gap: 16px; // Reduzindo o espaço entre os cartões
  }

  @media (max-width: 480px) {
    gap: 12px; // Menor espaço entre os cartões
    justify-content: center; // Centralizando os cartões
  }
`;
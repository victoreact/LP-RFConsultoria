import styled from "styled-components";

export const ContainerCta = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto; // Permitir que a altura se ajuste automaticamente
  padding: 80px 220px;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, #3C1A51 0%, #734490 100%);

  @media (max-width: 768px) {
    padding: 40px 20px; // Reduzindo o padding para telas menores
  }

  @media (max-width: 480px) {
    padding: 20px 10px; // Mais redução de padding para celulares
  }
`;

export const ContainerSection = styled.div`
  display: flex;
  flex-direction: row; // Mantendo a direção padrão
  width: 100%; // Ajustando a largura para 100%
  max-width: 1000px; // Definindo uma largura máxima
  height: auto; // Permitir que a altura se ajuste automaticamente
  padding: 40px; // Reduzindo o padding
  justify-content: center; // Centralizando o conteúdo
  align-items: center;
  gap: 60px;
  background-color: #F4F4F2;
  border-radius: 14px;

  img {
    max-width: 100%; // Garantindo que a imagem não ultrapasse a largura do contêiner
    height: auto; // Mantendo a proporção da imagem
  }

  @media (max-width: 768px) {
    flex-direction: column; // Mudando para coluna em telas menores
    padding: 20px; // Reduzindo o padding
    gap: 40px; // Ajustando o espaço entre os elementos
  }
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px; // Reduzindo o espaço entre os elementos

  h1 {
    color: #3C1A51;
    font-family: 'Red Hat Display', sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
  }

  p {
    color: #3C1A51;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 28px; // Diminuindo o tamanho da fonte do título
    }

    p {
      font-size: 16px; // Diminuindo o tamanho da fonte do parágrafo
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 24px; // Diminuindo ainda mais o tamanho da fonte do título
    }

    p {
      font-size: 14px; // Diminuindo ainda mais o tamanho da fonte do parágrafo
    }
  }
`;
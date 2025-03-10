import styled from "styled-components";

export const ContainerSection = styled.div`
    display: flex;
    padding: 100px 5%; /* Ajuste para 5% para responsividade */
    justify-content: center;
    align-items: center;
    gap: 80px;
    align-self: stretch;
    width: 100%;
    height: auto; /* Ajuste a altura para auto */
    
    @media (max-width: 768px) {
        flex-direction: column; /* Muda para coluna em telas menores */
        padding: 50px 20px; /* Ajuste o padding */
    }
`;

export const ContainerConteudo = styled.div`
    display: flex;
    flex-direction: column; /* Muda para coluna em telas menores */
    width: 100%; /* Ajuste para 100% */
    max-width: 1000px; /* Limite máximo */
    height: auto; /* Ajuste a altura para auto */
    justify-content: center;
    align-items: center;
`;

export const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    width: 100%; /* Ajuste para 100% */
    max-width: 350px; /* Limite máximo */
    
    h1 {
        color: #3C1A51;
        font-family: 'Red Hat Display', sans-serif;
        font-size: 28px; /* Ajuste para tamanhos menores */
    }
    
    p {
        color: #3C1A51;
        font-family: 'Poppins', sans-serif;
        font-size: 16px; /* Ajuste para tamanhos menores */
    }
`;

export const Container = styled.div`
    display: flex;
    width: 100%; /* Ajuste para 100% */
    max-width: 500px; /* Limite máximo */
    padding: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 54px;
    border-radius: 20px;
    border: 1px solid #734490;
    background: #f4f4f2;
    box-shadow: 0px 0px 10.9px 0px rgba(208, 131, 255, 0.1);
    
    @media (max-width: 768px) {
        width: 90%; /* Ajuste para 90% em telas menores */
        padding: 20px; /* Reduz o padding */
    }
`;

export const Title = styled.h2`
    color: #dc7344;
    text-align: center;
    font-family: Poppins;
    font-size: 28px; /* Ajuste para tamanhos menores */
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 12px;
`;

export const FormGroup = styled.div`
    display: flex;
    height: auto; /* Ajuste a altura para auto */
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;
`;

export const Label = styled.label`
    display: flex;
    height: auto; /* Ajuste a altura para auto */
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    align-self: stretch;
    color: #3c1a51;
    font-family: Poppins;
    font-size: 18px; /* Ajuste para tamanhos menores */
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #734490;
    border-radius: 8px;
    font-size: 16px;
    outline: none;
`;

export const SubmitButton = styled.button`
    display: flex;
    padding: 13px 34px;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    border-radius: 14px;
    background: #3c1a51;
    color: #f4f4f2;
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    cursor: pointer;
    border: none;
    transition: 0.3s;

    &:hover {
        background: #57286e;
    }
    
    @media (max-width: 768px) {
        width: 100%; /* Ajuste para 100% em telas menores */
    }
`;
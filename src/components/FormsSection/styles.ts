import styled from "styled-components";

export const ContainerSection = styled.div`
display: flex;
padding: 100px 220px;
justify-content: center;
align-items: center;
gap: 80px;
align-self: stretch;
width: 100%;
height: 856px;


`;
export const ContainerConteudo = styled.div`
display: flex;
width: 1000px;
height: 656px;
justify-content: space-between;
align-items: center;
`;
export const TextSection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 20px;
width: 350px;
height: 245px;

h1{
    color: #3C1A51;
    font-family: 'Red Hat Display', sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 124.62%;
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

export const Container = styled.div`
  display: flex;
  width: 500px;
  height: 585px;
  padding: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 54px;
  border-radius: 20px;
  border: 1px solid #734490;
  background: #f4f4f2;
  box-shadow: 0px 0px 10.9px 0px rgba(208, 131, 255, 0.1);
`;

export const Title = styled.h2`
  color: #dc7344;
  text-align: center;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`;

export const FormGroup = styled.div`
  display: flex;
  height: 86px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

export const Label = styled.label`
  display: flex;
  height: 20px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  align-self: stretch;
  color: #3c1a51;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 115%;
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
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: 0.3s;

  &:hover {
    background: #57286e;
  }
`;
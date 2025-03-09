import { ContainerHeader, RightDiv } from "./styles";
import logorf from '../../assets/logorf.svg';
import HeaderButtom from "../../buttons/HeaderButtom";

const Header = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("forms-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ContainerHeader id="header">
      <img src={logorf} alt="teste" />
      <RightDiv>
        <HeaderButtom text="Faça uma simulação" onClick={scrollToForm} />
        <a href="https://whatsss.link/MQCB4J" target="blank">
          <HeaderButtom text="Entre em contato" />
        </a>
      </RightDiv>
    </ContainerHeader>
  );
};

export default Header;

import { FloatingContainer, Button } from "./styles";
import arrowup from '../../assets/arrowupup.svg'
import zap from '../../assets/zapzap.svg'

const FloatingButtons = () => {
  const scrollToHeader = () => {
    const header = document.getElementById("header");
    if (header) {
      header.scrollIntoView({ behavior: "smooth" });
    }
  };
  
    return (
      <FloatingContainer>
        <Button onClick={scrollToHeader}>
          <img src={arrowup} alt="Voltar ao topo" />
        </Button>
        <Button as="a" href="https://whatsss.link/MQCB4J" target="_blank" rel="noopener noreferrer">
          <img src={zap} alt="WhatsApp" />
        </Button>
      </FloatingContainer>
    );
  };
  
  export default FloatingButtons;
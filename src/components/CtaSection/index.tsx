import { ContainerCta, ContainerSection, TextSection } from "./styles";
import ctaimg from '../../assets/framecta.png';
import BlueButtom from "../../buttons/BlueButtom";

const CtaSection = () => {
    return (
        <ContainerCta>
            <ContainerSection>
                <img src={ctaimg} alt="imagem propaganda cta" />
                <TextSection>
                    <h1>Vamos conversar?</h1>
                    <p>Entre em contato para um bate-papo sem compromisso! Vamos entender suas necessidades e encontrar a melhor solução para o seu negócio.</p>
                    <a href="https://whatsss.link/MQCB4J" target="_blank" rel="noopener noreferrer">
                        <BlueButtom text="Entre em contato" />
                    </a>
                </TextSection>
            </ContainerSection>
        </ContainerCta>
    );
}

export default CtaSection;
import FeedbackCard from "../../buttons/FeedbackCard";
import { CardContainerFeedback, FeedbackContainer } from "./styles";
import eduardo from '../../assets/eduardogomes.png';
import sofia from '../../assets/sofiamiranda.png';
import jose from '../../assets/josebarros.png';

const Feedback = () => {
    return (
        <FeedbackContainer>
            <h1>Clientes Satisfeitos</h1>
            <CardContainerFeedback>
                <FeedbackCard
                    width="310px"
                    height="430px"
                    text="A RF Consultoria revolucionou nossa gestão de projetos! A equipe altamente qualificada garantiu entregas ágeis e eficientes, reduzindo nossos prazos em mais de 40%."
                    profileName="Eduardo Gomes"
                    profileImage={eduardo}
                />
                <FeedbackCard
                    width="350px"
                    height="485px"
                    text="A alocação de profissionais techs foi a solução perfeita para nossa empresa. Trouxeram talentos incríveis que impulsionaram nossa inovação sem comprometer o orçamento."
                    profileName="Sofia Miranda"
                    profileImage={sofia}
                />
                <FeedbackCard
                    width="310px"
                    height="430px"
                    text="Com a automação de processos BPMS da RF Consultoria, conseguimos otimizar nosso fluxo de trabalho e reduzir custos operacionais significativamente. Excelente parceria!"
                    profileName="José Barros"
                    profileImage={jose}
                />
            </CardContainerFeedback>
        </FeedbackContainer>
    );
}

export default Feedback;
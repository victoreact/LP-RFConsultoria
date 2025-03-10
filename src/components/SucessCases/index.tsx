import CardSucess from "../../buttons/CardSucess";
import { ContainerCardSucess, ContainerSucess, TitleandSub } from "./styles";

const SucessCases = () => {
    return (
        <ContainerSucess>
            <TitleandSub>
                <h1>Cases de Sucesso</h1>
                <p>White Label</p>
            </TitleandSub>
            <ContainerCardSucess>
                <CardSucess 
                    subTitle="Plataforma de Clube Associativo" 
                    text="Criamos uma plataforma digital com interface amigável e integração eficiente para gerenciar associados e destacar benefícios exclusivos."
                />
                <CardSucess 
                    subTitle="Portal Corporativo para Indústria Química" 
                    text="Desenvolvemos um site institucional unindo tradição e modernidade, com uma interface acessível, organizada e intuitiva para destacar o portfólio de produtos."
                />
                <CardSucess 
                    subTitle="Solução de Pagamentos para Clube de Futebol Nacional" 
                    text="Criamos um sistema de pagamentos integrado ao clube, oferecendo aos torcedores uma solução prática, segura e personalizada."
                />
                <CardSucess 
                    subTitle="Portal Financeiro para Instituição de Crédito" 
                    text="Desenvolvemos uma plataforma robusta, com navegação intuitiva e integração segura com sistemas bancários para garantir uma experiência confiável."
                />
            </ContainerCardSucess>
        </ContainerSucess>
    );
}

export default SucessCases;
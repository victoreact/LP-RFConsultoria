import { AgruparFaq, ContainerContentFaq, FaqContainer } from "./styles";

const FaqSection = () => {
    return (
        <>
            <FaqContainer>
                <h1>Perguntas Frequentes</h1>
                <AgruparFaq>
                <ContainerContentFaq>
                    <h1>Por que os prazos dos meus projetos sempre estouram?</h1>
                    <p>O principal motivo para atrasos é a falta de equipe qualificada e processos ágeis que garantam entregas dentro do prazo. Nossa Fábrica de Software acelera projetos em até 40%, garantindo previsibilidade e eficiência desde o planejamento até a execução.</p>
                </ContainerContentFaq>
                <ContainerContentFaq>
                    <h1>Como reduzir o backlog crescente da minha empresa?</h1>
                    <p>O backlog cresce porque há mais demandas do que a equipe consegue executar. Com um time dedicado e especializado, reduzimos o backlog rapidamente, entregando soluções sem comprometer a qualidade e permitindo que sua empresa avance com inovação.</p>
                </ContainerContentFaq>
                <ContainerContentFaq>
                    <h1>Como posso escalar meu time sem complicação e sem altos custos?</h1>
                    <p>Contratar e treinar equipe interna pode ser caro e demorado. Nossa solução permite flexibilidade total, ajustando o time conforme a necessidade do projeto, sem burocracia e com profissionais qualificados prontos para atuar imediatamente.</p>
                </ContainerContentFaq>
                <ContainerContentFaq>
                    <h1>Como garantir a qualidade das entregas e evitar retrabalho?</h1>
                    <p>Retrabalho acontece por falta de processos claros e metodologias bem definidas. Aplicamos metodologias ágeis e um processo de QA estruturado para garantir que cada entrega seja validada rigorosamente antes da implementação, reduzindo falhas e aumentando a eficiência.</p>
                </ContainerContentFaq>
                <ContainerContentFaq>
                    <h1>Meu time tem dificuldade na gestão de projetos. Como melhorar isso?</h1>
                    <p>A falta de organização e visibilidade compromete prazos e metas. Nossos gerentes de projetos garantem um planejamento eficiente, priorização correta e execução sem falhas, permitindo uma gestão mais estratégica e assertiva.</p>
                </ContainerContentFaq>
                <ContainerContentFaq>
                    <h1>Como manter minha tecnologia atualizada e competitiva?</h1>
                    <p>Sistemas desatualizados prejudicam a competitividade e segurança da empresa. Atualizamos e modernizamos aplicações com soluções escaláveis e alinhadas às tendências do mercado, garantindo que sua empresa esteja sempre à frente.</p>
                </ContainerContentFaq>
                </AgruparFaq>
            </FaqContainer>
        </>
    );
};

export default FaqSection;

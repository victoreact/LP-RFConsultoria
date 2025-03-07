import CardSolutions from "../../buttons/CardSolutions";
import { ContainerCards, ContainerSolutions, LineCards } from "./styles";
import arrowvector from '../../assets/ArrowVector.svg'


const Solutions = () => {
    return(
        <>
        <ContainerSolutions>
            <h1>O que resolvemos</h1>

            <ContainerCards>
                <LineCards>
                    <CardSolutions 
                    title="Prazos Estourados"
                    titleColor="#F4F4F2"
                    text="Prazos estourados – Projetos atrasados devido à falta de equipe qualificada e processos ineficientes."
                    bgColor="#DC7344"
                    />

                    <img src={arrowvector} alt="passar para o lado" />
                    <CardSolutions 
                    title="Entrega rápida e de qualidade"
                    titleColor="#3C1A51"
                    text="Time completo pelo custo de 1 – Profissionais experientes a um custo 60% menor que CLT."
                    bgColor="#0AD9CA"
                    
                    
                    />
                </LineCards>    
                <LineCards>
                    <CardSolutions 
                    title="Prazos Estourados"
                    titleColor="#F4F4F2"
                    text="Prazos estourados – Projetos atrasados devido à falta de equipe qualificada e processos ineficientes."
                    bgColor="#DC7344"
                    />

                    <img src={arrowvector} alt="passar para o lado" />
                    <CardSolutions 
                    title="Entrega rápida e de qualidade"
                    titleColor="#3C1A51"
                    text="Time completo pelo custo de 1 – Profissionais experientes a um custo 60% menor que CLT."
                    bgColor="#0AD9CA"
                    
                    
                    />
                </LineCards>    
                <LineCards>
                    <CardSolutions 
                    title="Prazos Estourados"
                    titleColor="#F4F4F2"
                    text="Prazos estourados – Projetos atrasados devido à falta de equipe qualificada e processos ineficientes."
                    bgColor="#DC7344"
                    />

                    <img src={arrowvector} alt="passar para o lado" />
                    <CardSolutions 
                    title="Entrega rápida e de qualidade"
                    titleColor="#3C1A51"
                    text="Time completo pelo custo de 1 – Profissionais experientes a um custo 60% menor que CLT."
                    bgColor="#0AD9CA"
                    
                    
                    />
                </LineCards>    
            </ContainerCards>
        </ContainerSolutions>
        </>
    )
}

export default Solutions;


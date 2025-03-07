import { ContainerLeft, ContainerRight, HeroContainer, TitleAndSubtitle } from "./styles"
import vectorhero from '../../assets/Vector.png'
import BlueButtom from "../../buttons/BlueButtom"



const Hero = () => {
    return(
        <>
        <HeroContainer>
            <ContainerLeft>
                <TitleAndSubtitle>
                    <h1>Transformamos desafios em inovação digital</h1>

                    <p>Soluções personalizadas, tecnologia de ponta e um time de especialistas para impulsionar seu negócio.</p>
                    
                </TitleAndSubtitle>
                <BlueButtom text="Saiba mais"/>
            </ContainerLeft>
            <ContainerRight>
                <img src={vectorhero} alt="Logo propaganda" />
            </ContainerRight>
        </HeroContainer>
        </>
    )
}

export default Hero
import { ContainerHeader, RightDiv } from "./styles"
import logorf from '../../assets/logorf.svg'
import HeaderButtom from "../../buttons/HeaderButtom"


const Header = () => {
    return(
        <>
        <ContainerHeader>
            <img src={logorf} alt="teste" />
            <RightDiv>
            <HeaderButtom text="Faça uma simulação"/>
            <HeaderButtom text="Entre em contato"/>
            </RightDiv>
        </ContainerHeader>
        </>
    )
}

export default Header
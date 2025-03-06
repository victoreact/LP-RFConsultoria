import { ContainerHeader } from "./styles"
import logorf from '../../assets/logorf.svg'


const Header = () => {
    return(
        <>
        <ContainerHeader>
            <img src={logorf} alt="teste" />
        </ContainerHeader>
        </>
    )
}

export default Header
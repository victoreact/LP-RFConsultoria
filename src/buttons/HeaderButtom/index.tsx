import { ContainerHeaderButton } from "./styles"

interface HeaderProps{
    text: string;
}

const HeaderButtom = ({text}: HeaderProps) =>{
    return(
        <>
        <ContainerHeaderButton>
            <p>{text}</p>
        </ContainerHeaderButton>
        </>
    )
}

export default HeaderButtom
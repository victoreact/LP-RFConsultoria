import { ContainerHeaderButton } from "./styles"

interface HeaderProps{
    text: string;
    onClick?: () => void;
}

const HeaderButtom = ({text, onClick}: HeaderProps) =>{
    return(
        <>
        <ContainerHeaderButton onClick={onClick}>
            <p>{text}</p>
        </ContainerHeaderButton>
        </>
    )
}

export default HeaderButtom
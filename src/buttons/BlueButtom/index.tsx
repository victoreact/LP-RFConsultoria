import { BlueContainer } from "./styles"
interface Props{
    text: string;
    
}
const BlueButtom = ({text}: Props) => {
    return(
        <>
        <BlueContainer>
            <p>{text}</p>
        </BlueContainer>
        </>
    )
}

export default BlueButtom
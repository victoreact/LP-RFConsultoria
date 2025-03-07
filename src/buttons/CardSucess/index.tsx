import { CardSucess1 } from "./styles";
interface SucessProps {
    subTitle: string;
    text: string;
}
const CardSucess = ({ subTitle, text}: SucessProps) => {
    return(
        <>
        <CardSucess1>
            <h2>{subTitle}</h2>
            <p>{text}</p>
        </CardSucess1>
        </>
    )
}

export default CardSucess;
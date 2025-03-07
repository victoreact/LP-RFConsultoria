import { useState } from "react";
import { CardContainer, CardTitle, Popup } from "./styles";

interface CardProps {
    title: string;
    titleColor?: string;
    text: string;
    bgColor?: string;
}

const CardSolutions = ({ title, titleColor, text, bgColor}: CardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return(
        <>
        <CardContainer
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ backgroundColor: bgColor }}
        >
            
         
            <CardTitle style={{ color: titleColor }}>{title}</CardTitle>
            {isHovered && (
                <Popup>
                    <p>{text}</p>
                </Popup>
            )}
        </CardContainer>
        </>
    )
}

export default CardSolutions;
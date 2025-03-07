import { ContainerFeedbackCard, Profile } from "./styles";
import star from '../../assets/Icon.svg'
interface FeedbackProps {
    width?: string;
    height?: string;
    text: string;
    profileName: string;
    profileImage: string;
}

const FeedbackCard = ({ width, height, text, profileName, profileImage}: FeedbackProps) => {
    return(
        <>
        <ContainerFeedbackCard style={{ width, height }}>
            <img src={star} alt="feedbackstar" />
            <p>{text}</p>
            <Profile>
                <img src={profileImage} alt="#" />
                <p>{profileName}</p>
            </Profile>
        </ContainerFeedbackCard>
        </>
    )
}

export default FeedbackCard;

import { ContainerFooter, Copyright, LineContent, LineDiv } from "./styles"
import minilogo from '../../assets/minilogo.svg'
import linkedln from '../../assets/linkedln.svg'

const Footer = () => {
    return (
        <>
        <ContainerFooter>
            <LineContent>
                <img src={minilogo} alt="logotipo" />
                <a href="https://www.rfbernardes.com.br/politica-de-privacidade" target="blank">
                    <p>Política de Privacidade</p>
                </a>
                <a href="https://www.rfbernardes.com.br/quem-somos" target="blank">
                    <p>Quem somos</p>
                </a>
            </LineContent>
            <LineDiv />
            <Copyright>
                <p>Copyright © 2025 RFBernardes</p>
                <a href="https://www.linkedin.com/company/rfbernardes-consultoria-em-ti/posts/?feedView=all" target="blank"><img src={linkedln} alt="Rede Social linkedln" /></a>
            </Copyright>
        </ContainerFooter>
        </>
    )
}

export default Footer;
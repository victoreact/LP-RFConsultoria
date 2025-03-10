import { Container, Form, FormGroup, Label, Input, SubmitButton, Title, ContainerSection, ContainerConteudo, TextSection } from "./styles";

const FormsSection = () => {
    return (
        <ContainerSection id="forms-section"> 
            <ContainerConteudo> 
                <TextSection>
                    <h1>Por tempo limitado!</h1>
                    <p>Preencha o formulário e receba um diagnóstico gratuito. Vamos analisar os principais desafios da sua empresa e apresentar soluções para otimizar processos, reduzir custos e aumentar a eficiência.</p>
                </TextSection>

                <Container>
                    <Title>Cadastre-se para testar</Title>
                    <Form action="https://formsubmit.co/comercial_atendimento@rfbernardes.com.br" method="POST" target="_blank">
                        <FormGroup>
                            <Label htmlFor="name">Nome</Label>
                            <Input type="text" id="name" name="name" placeholder="Nome Sobrenome" required />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" name="email" placeholder="nome@email.com" required />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="phone">Celular</Label>
                            <Input type="tel" id="phone" name="phone" placeholder="(00) 0 0000-0000" required />
                        </FormGroup>
                        <input type="hidden" name="_captcha" value="false" />
                        <SubmitButton type="submit">Enviar</SubmitButton>
                    </Form>
                </Container>
            </ContainerConteudo>
        </ContainerSection>
    )
}

export default FormsSection;
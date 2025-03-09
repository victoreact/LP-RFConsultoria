import { Container, Form, FormGroup, Label, Input, SubmitButton, Title, ContainerSection, ContainerConteudo, TextSection } from "./styles";

const FormsSection = () => {
    return (
        <>
        <ContainerSection id="forms-section"> 
            <ContainerConteudo> 
                <TextSection>
                    <h1>Por tempo limitado!</h1>
                    <p>Preencha o formulário e receba um diagnóstico gratuito. Vamos analisar os principais desafios da sua empresa e apresentar soluções para otimizar processos, reduzir custos e aumentar a eficiência.</p>
                </TextSection>

            <Container>
                <Title>Cadastre-se para testar</Title>
                <Form>
                    <FormGroup>
                        <Label>Nome</Label>
                        <Input type="text" placeholder="Nome Sobrenome" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" placeholder="nome@email.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Celular</Label>
                        <Input type="tel" placeholder="(00) 0 0000-0000" />
                    </FormGroup>
                    <SubmitButton>Enviar</SubmitButton>
                </Form>
            </Container>

            </ContainerConteudo>
            </ContainerSection>
        </>
    )
}

export default FormsSection;
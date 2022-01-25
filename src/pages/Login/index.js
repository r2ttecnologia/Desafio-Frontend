import React from "react"
import { useNavigate } from 'react-router-dom'

import logo from "../../assets/fotografia-logotipo-modelo-vermelho_1057-1785.jpg"

import Background from "../../Components/Background"
import Container from "../../Components/Container"
import Img from "../../Components/Img"
import H1 from "../../Components/H1"
import Paragraph from "../../Components/Paragraph"
import Label from "../../Components/Label"
import Input from "../../Components/Input"
import Button from "../../Components/Button"

const App = () => {
    const navigate = useNavigate()
    const changePage = () => {
        navigate("/Authenticated")
    }
    return (
        <Background>
            <Container>
                <Img src={logo} alt="imagem de logo de câmera"/>
                <H1>Olá,</H1>
                <Paragraph>Faça o login para continuar</Paragraph>
                <Label>Email</Label>
                <Input type="text"/>
                <Label>Senha</Label>
                <Input type="password"/>
                <Button>Entrar</Button>
            </Container>
        </Background>
    )
}
export default App
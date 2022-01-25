import React from "react"
import { useNavigate } from 'react-router-dom'

import logo from "../../assets/fotografia-logotipo-modelo-vermelho_1057-1785.jpg"

import Background from "../../Components/Background"
import Container from "../../Components/Container"
import Img from "../../Components/Img"

const App = () => {
    const navigate = useNavigate()
    const changePage = () => {
        navigate("/Authenticated")
    }
    return (
        <Background>
            <Container>
                <Img src={logo} alt="imagem de logo de câmera"/>
            </Container>
        </Background>
    )
}
export default App
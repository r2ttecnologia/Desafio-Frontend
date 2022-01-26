import React from "react"
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";

import Background from "../../Components/Background"
import Form from "../../Components/Form"
import Img from "../../Components/Img"
import H1 from "../../Components/H1"
import Button from "../../Components/Button"

import img from "../../assets/fotografia-logotipo-modelo-vermelho_1057-1785.jpg"

const App = () => {

    const { handleSubmit } = useForm()

    const navigate = useNavigate()
    const onSubmit = () => {
        navigate("/")
    }
    return (
        <Background>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Img src={img} alt="imagem de logo de câmera" />
                <H1>Logado!</H1>
                <Button type="submit">Voltar</Button>
            </Form>
        </Background>
    )
}
export default App
import React from "react"
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import logo from "../../assets/fotografia-logotipo-modelo-vermelho_1057-1785.jpg"

import Background from "../../Components/Background"
import Form from "../../Components/Form"
import Img from "../../Components/Img"
import H1 from "../../Components/H1"
import Paragraph from "../../Components/Paragraph"
import Label from "../../Components/Label"
import Input from "../../Components/Input"
import Button from "../../Components/Button"
import Span from "../../Components/Span"

const schema = yup.object({
    email: yup.string().required("o email é obrigatório").email("digite um email válido"),
    password: yup.string().required("a senha é obrigatória").min(6, "a senha deve ter pelo menos 6 caracteres"),
}).required();

const App = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const navigate = useNavigate()

    const onSubmit = (data) => {
        if (data.email!== "exemplo@exemplo.com" || data.password !== "123456") {
            return alert("Email ou senha errados. Veja o console e os dados estarão lá")
        }
        navigate("/Authenticated")
    }
    
    console.log("email: exemplo@exemplo.com, senha: 123456");

    return (
        <Background inLogin={true}>
            <Form inLogin={true} onSubmit={handleSubmit(onSubmit)}>
                <Img src={logo} alt="imagem de logo de câmera" />
                <H1 inLogin={true}>Olá,</H1>
                <Paragraph>Faça o login para continuar</Paragraph>
                <Label>Email</Label>
                <Input {...register("email", { required: true })} />
                {errors.email && <Span>{errors.email?.message}</Span>}
                <Label>Senha</Label>
                <Input type="password" {...register("password", { required: true })} />
                {errors.password && <Span>{errors.password?.message}</Span>}
                <Button type="submit">Entrar</Button>
            </Form>
        </Background>
    )
}
export default App
import { Container } from "./styles";
import { useForm } from 'react-hook-form'
import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext"

interface ILogin {
    username: string;
    password: string;
}

export default function Login() {
    const { register, handleSubmit} = useForm();
    const { signIn } = useContext(AuthContext);

    async function handleSignIn(data: ILogin){
        await signIn(data)
    }

    return (
        <Container onSubmit={handleSubmit(handleSignIn)}>
            <h1>Login</h1>
            <input 
                {...register('username')}
                type="text"
                id="username"
                name="username"
                placeholder="Digite seu nome de usuário"
            />
            <input 
                {...register('password')}
                type="password"
                id="password"
                name="password"
                placeholder="Digite a sua senha"
            />
            <button 
                type="submit"
            >
                Entrar
            </button>
        </Container>
    )
}
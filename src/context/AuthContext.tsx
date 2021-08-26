import { createContext, ReactNode, useState } from "react";
import { api } from '../services/api';
import { setCookie } from 'nookies';
import { useRouter } from 'next/router';

type AuthProps = {
    children: ReactNode;
}

type IUser = {
    name: string
}

type AuthContextData = {
    user: IUser | null;
    isAuthenticated: boolean;
    signIn: (data: SignInData) => Promise<void>
}

type SignInData = {
    username: string;
    password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProps) { 
    const [user, setUser] = useState<IUser | null>(null)
    const router = useRouter();
    const isAuthenticated = !!user;


    async function signIn({ username, password }: SignInData) { 
        //chamada para API e trazer o token, salvando-o nos cookies
        const response = await api.post('login', {
            username,
            password,
        })

        const { token, user } = response.data;
        
        setCookie(null, '@core:token', token, {
            maxAge: 60 * 60 * 24 * 7 // 1 week
        })

        setUser(user)

        router.push('/')

    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )

}
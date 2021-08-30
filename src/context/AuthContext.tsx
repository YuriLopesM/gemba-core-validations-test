import { createContext, ReactNode, useState } from "react";
import { destroyCookie, parseCookies, setCookie } from 'nookies';
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
    signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProps) { 
    const { 
        ['@core:token']: cookieToken,
    } = parseCookies();

    const [user, setUser] = useState<IUser | null>(null)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!cookieToken);
    const router = useRouter();


    async function signOut() {
        destroyCookie({}, '@core:token', {path: '/'});
        destroyCookie({}, '@core:redirect_pathname', {path: '/'});
        setUser(null);
        setIsAuthenticated(false);
        router.push('http://vancouver:3000/')
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signOut }}>
            {children}
        </AuthContext.Provider>
    )

}
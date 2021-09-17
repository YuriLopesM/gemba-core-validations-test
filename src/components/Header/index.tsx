import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import { Container } from './styles'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

interface HeaderProps {
    theme: string;
    changeTheme: () => void;
}

export function Header({ theme, changeTheme }: HeaderProps) {
    let { t } = useTranslation();
    const router = useRouter();
    const { signOut } = useContext(AuthContext);
     
    return (
        <Container> 
            <Link href='/'>
                <h1>{t("common:title")}</h1>
            </Link>

            <nav>
                <Link href='/charts'>
                    <a className={router.pathname == "/charts" ? "anchorActive" : ""}>{t("common:charts")}</a>
                </Link>
            </nav>
            <div>
                <button onClick={changeTheme}>
                    { theme == 'light' ?
                        <Image src="/assets/icons/light-mode.svg" alt="Light mode icon" height={24} width={24}/> :
                        <Image src="/assets/icons/dark-mode.svg" alt="Dark mode icon" height={24} width={24}/>
                    }
                </button>
            </div>
           
        </Container>
    )
}
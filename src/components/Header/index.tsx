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
                <Link href='/cookies'>
                    <a className={router.pathname == "/cookies" ? "anchorActive" : ""}>Cookies</a>
                </Link>
                <Link href='/i18n'>
                    <a className={router.pathname == "/i18n" ? "anchorActive" : ""}>i18n</a>
                </Link>
                <Link href='/themes'>
                    <a className={router.pathname == "/themes" ? "anchorActive" : ""}>{t("common:themes")}</a>
                </Link>
                <Link href='/charts'>
                    <a className={router.pathname == "/charts" ? "anchorActive" : ""}>{t("common:charts")}</a>
                </Link>
                <Link href='/auth'>
                    <a className={router.pathname == "/auth" ? "anchorActive" : ""}>Autenticação</a>
                </Link>
                <Link href='/404'>
                    <a className={router.pathname == "/404" ? "anchorActive" : ""}>404</a>
                </Link>
            </nav>
            <div>
                <ul>
                    {router.locales?.map((locale) => (
                        <li className={router.locale == locale ? "localeActive" : ""} key={locale}>
                            <Link scroll={false} href={router.asPath} locale={locale}>
                                <a>{locale}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <button onClick={changeTheme}>
                    { theme == 'light' ?
                        <Image src="/assets/icons/light-mode.svg" alt="Light mode icon" height={24} width={24}/> :
                        <Image src="/assets/icons/dark-mode.svg" alt="Dark mode icon" height={24} width={24}/>
                    }
                    
                </button>
                <button className="signOut" onClick={() => signOut()}>
                    Sign Out
                </button>
            </div>
           
        </Container>
    )
}
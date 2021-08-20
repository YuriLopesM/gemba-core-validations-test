import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import { Container } from './styles'

interface HeaderProps {
    theme: string;
    changeTheme: () => void;
}

export function Header({ theme, changeTheme }: HeaderProps) {
    let { t } = useTranslation();
    const router = useRouter();
     
    return (
        <Container>
            <h1>{t("common:title")}</h1>

            <nav>
                <Link href='/themes'>
                    <a className={router.pathname == "/themes" ? "anchorActive" : ""}>{t("common:themes")}</a>
                </Link>
                <Link href='/i18n'>
                    <a className={router.pathname == "/i18n" ? "anchorActive" : ""}>{t("common:i18n")}</a>
                </Link>
            </nav>
            <div>
                <ul>
                    {router.locales?.map((locale) => (
                        <li className={router.locale == locale ? "localeActive" : ""} key={locale}>
                            <Link href={router.asPath} locale={locale}>
                                <a>{locale}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <button onClick={changeTheme}>
                    { theme == 'light' ?
                        <img src="/assets/icons/light-mode.svg" alt="Light mode icon" height={24} width={24}/> :
                        <img src="/assets/icons/dark-mode.svg" alt="Dark mode icon" height={24} width={24}/>
                    }
                    
                </button>
            </div>
           
        </Container>
    )
}
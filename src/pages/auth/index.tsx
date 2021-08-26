import Head from 'next/head';
import Link from 'next/link';

export default function Auth() {
    return(
        <>
            <Head>
                <title>Tests | Auth</title>
            </Head> 
            <header>
                <h1>Autenticação</h1>
                <p>Conceito, novas diretrizes da LGPD, bibliotecas e etc.</p>
            </header>
            <section>
                <h3 id="lorem">Conceito</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae temporibus, nisi quia pariatur inventore ullam quae explicabo odio laudantium corrupti quas aliquid, at perferendis tenetur. Dignissimos exercitationem ipsa maiores.</p>
                <ul>
                    <li><strong>Lorem</strong>: ipsum dolor sit amet;</li>
                </ul>
                <footer className="link-wrapper">
                    <Link href="https://www.braziljs.org/p/implementando-internacionalizacao-i18n-com-javascript">
                        <a target="_blank">lorem lorem lorem</a>
                    </Link>
                </footer> 
            </section>
        </>
    )
 }
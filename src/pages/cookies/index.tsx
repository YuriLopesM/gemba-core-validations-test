import Head from 'next/head';
import Link from 'next/link';

export default function Cookies() {
    return(
        <>
            <Head>
                <title>Tests | Cookies</title>
            </Head> 
            <header>
                <h1>Cookies</h1>
                <p>Conceito, novas diretrizes da LGPD, bibliotecas e etc.</p>
            </header>
            <section>
                <h3 id="concept">Conceito</h3>
                <p>Armazenar em Cookie é a forma mais tradicional para permanência de dados no Client Side. São utilizados de diversas maneiras, tais como autenticação do usuário, personalização de conteúdo e coleta de análises (como o Google Analytics).</p>

                <p>Em nossa aplicação, primeiramente os Cookies servirão para armazenamento de informações vitais, como o Token de autenticação. Utilizaremos o método de compartilhamento entre as diversas aplicações, mantendo o usuário logado utilizando somente um login.</p>

                <p>Existem algumas diferenciações: o <strong>Session Cookie</strong> é aquele em que as informações são deletadas assim que o usuário sai do site, enquanto o <strong>Persistent Cookie</strong> ficam gravados após a saída do site, por um tempo determinado pelo desenvolvedor.</p>

                <p>Outro conceito base, é a diferença entre <strong>First-Party Cookies</strong> e <strong>Third-Party Cookies</strong>: o primeiro é feito pelo próprio domínio do site, enquanto o segundo era feito por domínios externos, porém foi descontinuado devido a possibilidade de vazamento de dados. (Leia o segundo e terceiro artigos na aba de links)</p>

                <footer className="link-wrapper">
                    <Link href="https://www.hostgator.com.br/blog/o-que-sao-os-cookies-da-web/">
                        <a target="_blank">O que são Cookies da Web?</a>
                    </Link>
                    <Link href="https://rockcontent.com/br/blog/fim-dos-third-party-cookies/">
                        <a target="_blank">Fim dos Third-Party Cookies</a>
                    </Link>
                    <Link href="https://clearcode.cc/blog/difference-between-first-party-third-party-cookies/#third-party-cookies">
                        <a target="_blank">Diferença entre FPC e TPC? (Inglês)</a>
                    </Link>
                </footer> 
            </section>
        </>
    )
 }
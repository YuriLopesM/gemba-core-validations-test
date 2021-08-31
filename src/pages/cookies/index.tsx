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

            <section>
                <h3 id="LGPD">Novas Diretrizes da LGPD</h3>
                <p>Conforme a nova Lei Geral de Proteção a Dados temos o conceito de <em>&quot;dado pessoal: informação relacionada a pessoa natural identificada ou identificável.&quot;</em></p>
                <p>São diversos pontos a serem analisados, que cabem a leitura dos 3 artigos abaixo para compreender melhor a LGPD. Visando melhor entender não só o contexto dos Cookies, mas a manipulação de dados em si, se torna estritamente necessário uma consultoria com algum especialista na área.</p>

                <footer className="link-wrapper">
                    <Link href="https://goadopt.io/blog/cookies-e-lgpd/">
                        <a target="_blank">LGPD e Cookies: o que você precisa saber!</a>
                    </Link>
                    <Link href="https://www.comunique-se.com.br/blog/lgpd-os-impactos-dos-cookies/">
                        <a target="_blank">LGPD: Os impactos dos Cookies</a>
                    </Link>
                    <Link href="https://www.consumidormoderno.com.br/2021/04/30/cookies-lgpd/">
                        <a target="_blank">A relação do uso de Cookies com a LGPD</a>
                    </Link>
                </footer> 
            </section>
            <section>
                <h3 id="libs">Bibliotecas</h3>
                <p>Não é possível utilizar o padrão do JavaScript para lidar com Cookies (document.cookie), pois mantemos o estado da aplicação com o servidor e em seu contexto não existe o <strong>document</strong>. Para isto, utilizamos a biblioteca <strong>Nookies</strong>, que possui de maneira integrada a utilização do Next com SSR (Server-Side Rendering).</p>


                <footer className="link-wrapper">
                    <Link href="https://github.com/maticzav/nookies">
                        <a target="_blank">Nookies (Repositório no GitHub)</a>
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=zSl_n-9yGRs">
                        <a target="_blank">Next.js - Cookies ou LocalStorage? (YouTube)</a>
                    </Link>
                </footer> 
            </section>
        </>
    )
 }
import Head from 'next/head';
import Link from 'next/link'

export default function i18n() { 
    return(
        <>
            <Head>
                <title>Tests | Themes</title>
            </Head> 
            <header>
                <h1>Internacionalização</h1>
                <p>Conceito, linguagem e formatações, roteamento do NextJS e bibliotecas.</p>
            </header>
            <section>
                <h3 id="concept">Conceito</h3>
                <p>Internacionalização é popularmente conhecido no mundo de desenvolvimento como <strong>i18n</strong> (&quot;i&quot; + 18 letras + &quot;n&quot;) e trata-se de um processo de criação ou transformação de produtos e/ou serviços, de modo que eles possam facilmente ser adaptados para idiomas e culturas locais específicas</p>
                <ul>
                    <li><strong>Competitividade internacional</strong>: a aplicação não compete apenas com mercado interno;</li>
                    <li><strong>Lucros maiores</strong>: pode-se aumentar a quantidade de clientes visando a globalização;</li>
                    <li><strong>Diferenciação</strong>: diferenciamos o produto dos demais, sendo um importante fator de decisão para empresas externas.</li>
                </ul>
                <footer className="link-wrapper">
                    <Link href="https://www.braziljs.org/p/implementando-internacionalizacao-i18n-com-javascript">
                        <a target="_blank">Implementando i18n com JavaScript</a>
                    </Link>
                </footer> 
            </section>
            <section>
                <h3 id="translate_and_formatting">Tradução e Formatações</h3>
                <p>Para se adequar internacionalmente, dois tópicos são bem importantes: a tradução em si e a formatação de valores.</p>
                <p>Relacionado a formatações, o JavaScript possui uma API nativa chamada <strong>Intl</strong>, conhecida como ECMA-402. Esta API oferece funcionalidades para formatação de números e datas seguindo o idioma inserido.</p>
                <p>Seguindo com a tradução, utilizam-se bibliotecas auxiliares para o mesmo. Vale lembrar que não existe nenhuma biblioteca JavaScript capaz de suportar todas as necessidades de internacionalização.</p>
                <p>Devido ao seu grau de dificuldade, siga os tópicos a seguir para entender mais sobre as traduções.</p>
                <footer className="link-wrapper">
                    <Link href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl">
                        <a target="_blank">MDN - Intl</a>
                    </Link>
                </footer> 
            </section>
            <section>
                <h3 id="nextjs">Roteamento do NextJS</h3>
                <p>A partir da versão 10.0.0, o NextJS possui suporte nativo a internacionalização, lidando com locais, sub-locais, detectação automática, mudança de domínio e mais. Para acessar toda documentação, basta clicar no primeiro link.</p>
                <p>Como base, segui os dois vídeos (também na sessão de links) e utilizei a biblioteca <code>next-translate</code> para lidar com textos dinâmicos baseados no local.</p>
                <p>Para testar, basta trocar a linguagem no canto superior direito e verificar o nome do título do Header.</p>
                
                <footer className="link-wrapper">
                    <Link href="https://nextjs.org/docs/advanced-features/i18n-routing">
                        <a target="_blank">i18n Routing in NextJS</a>
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=SJDYCw5KC7s">
                        <a target="_blank">i18n with Next.js! (YouTube)</a>
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=Rbi52ZYtVKM">
                        <a target="_blank">Next.js 10 Internationalization (YouTube)</a>
                    </Link>
                    <Link href="https://github.com/vinissimus/next-translate">
                        <a target="_blank">Repositório Next-Translate</a>
                    </Link>
                </footer> 
            </section>
            
        </> 
    )
}
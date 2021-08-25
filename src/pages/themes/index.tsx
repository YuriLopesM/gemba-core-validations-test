import Head from 'next/head';
import Link from 'next/link';

export default function i18n() { 
    return(
        <>
            <Head>
                <title>Tests | Themes</title>
            </Head> 
            <header>
                <h1>Temas</h1>
                <p>Utilização do Styled Components, configuração do Babel e troca de temas.</p>
            </header>
            <section>
                <h3 id="styled-components">Styled Components</h3>
                <p>Trata-se de uma biblioteca <em>(library)</em> que nos permite escrever o CSS dentro do JavaScript. Dessa maneira, o projeto ficará todo componentizado utilizando somente arquivos em <code>.js</code>.</p>
                <ul>
                    <li>Melhora a compatibilidade com navegadores, pois não necessita a utilização do Babel para retrocompatibilidade;</li>
                    <li><strong>CSS Modules</strong>: o próprio Styled Components cria um <code>hash</code> nas classes do CSS, assim cada componente possui um CSS único;</li>
                    <li>Licença MIT.</li>
                </ul>
                <p>Ao invés de Styled Components, poderia ser utilizado o pré-processador <strong>SCSS</strong>, uma versão do SASS que possui sintaxe parecida com o CSS puro e é amplamente utilizado.</p>
                <footer className="link-wrapper">
                    <Link href="https://styled-components.com/">
                        <a target="_blank">Site Oficial do Styled-Components</a>
                    </Link>
                    <Link href="https://github.com/styled-components/styled-components">
                        <a target="_blank">Repositório no GitHub</a>
                    </Link>
                </footer> 
            </section>
            <section>
                <h3 id="babel">Configuração do Babel</h3>
                <p>O Babel é um transcompilador de JavaScript, convertendo versões recentes do ECMAScript para versões mais antigas, mantendo a compatibilidade entre navegadores. É utilizado por baixo dos panos junto com o <strong>Webpack</strong> em basicamente todos os frameworks de JavaScript.</p>
                <p>Para conseguirmos utilizar o Styled Components com o NextJS, utilizamos um plugin criado pelo Styled chamado <code>babel-plugin-styled-components</code>.</p>
                <footer className="link-wrapper">
                    <Link href="https://stackoverflow.com/a/63986853">
                        <a target="_blank">Erro em NextJS + Libs de Estilização (StackOverflow)</a>
                    </Link>
                    <Link href="https://github.com/nblthree/nextjs-with-material-ui-and-styled-components/blob/master/.babelrc ">
                        <a target="_blank">Repositório do código para o Babel</a>
                    </Link>
                </footer>                
            </section>
            <section>
                <h3 id="theme">Alterar o Tema</h3>
                <p>Dentro do Styled Components há diversas maneiras de alterar o tema (principalmente em questão Dark/Light Theme). Neste caso, utilizamos como teste o padrão dos links a seguir.</p>
                <p>Para visualizar a troca de temas neste sistema, clique no ícone no canto superior direito, dentro do Header.</p>
                <footer className="link-wrapper">
                    <Link href="https://medium.com/bigpanda-engineering/dark-theme-with-styled-components-a573dd898e2a">
                        <a target="_blank">Dark theme with Styled Components (Medium)</a>
                    </Link>
                </footer>                
            </section>


        </> 
    )
}
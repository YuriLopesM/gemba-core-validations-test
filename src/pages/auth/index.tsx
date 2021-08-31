import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


import flowChart_01 from '../../../public/assets/images/Flowchart_01.png';
import flowChart_02 from '../../../public/assets/images/Flowchart_02.png';

export default function Auth() {
    return(
        <>
            <Head>
                <title>Tests | Auth</title>
            </Head> 
            <header>
                <h1>Autenticação</h1>
                <p>Ideia principal, como fazer e fluxogramas.</p>
            </header>
            <section>
                <h3 id="concept">Ideia principal</h3>
                <p>Originalmente, a ideia era a centralização da rota de login, acessando as outras páginas por meio de botões/cards, como uma central de aplicações.</p>
                <p>Premissas:</p>
                <ul>
                    <li><strong>Centralização</strong> das aplicações, módulos, etc;</li>
                    <li><strong>Otimização</strong> do processo;</li>
                    <li><strong>Facilitação</strong> para o usuário achar seus módulos.</li>
                </ul>
            </section>
            <section>
                <h3 id="how-to-make">Como fazer</h3>
                <p>Foi idealizado então a utilização de Tokens (JWT) e o armazenamento/persistência de dados via Cookies. Assim, o mesmo domínio tem acesso a um só login, baseando-se em SSO (Single Sign-On).</p>
                <p>Como base, utilizamos o vídeo anexado no link para validar a ideia.</p>
                <footer className="link-wrapper">
                    <Link href="https://www.youtube.com/watch?v=pvrKHpXGO8E">
                        <a target="_blank">Next.js - Autenticação JWT com back-end próprio (YouTube)</a>
                    </Link>
                </footer> 
            </section>
            <section>
                <h3 id="flowchart">Fluxograma</h3>
                <p>Segue o fluxograma em que a ideia se baseia:</p>
                <div className="next-image">
                    <Image src={flowChart_01}  alt="Flowchart of Cookies" width={879} height={988} layout="responsive" quality={100}></Image>
                    <Image src={flowChart_02}  alt="Flowchart of Cookies" width={1096} height={888} layout="responsive" quality={100}></Image>
                </div>
                
            </section>
        </>
    )
 }
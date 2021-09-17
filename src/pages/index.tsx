import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => { router.push('/charts')}, [])
  
  return (
    <>
      <Head>
        <title>Tests | Core</title>
      </Head> 
      <header>
          <h1>Bem-vindo</h1>
          <p>Navegue entre as páginas para ler sobre cada conteúdo.</p>
      </header>
      <section>
          <h3 id="tags">Sobre</h3>
          <p>Projeto desenvolvido com testes envolvendo propriedades/funções comuns relacionadas ao desenvolvimento dos próximos produtos da AGPR5. Aqui será uma suite mínima, utilizada somente para experimentar o Next, testar bibliotecas e funcionalidades antes mesmo de colocá-las na solução.</p>
          <p>Developed with 💙 by <strong>Yuri Lopes Machado.</strong></p>
          <footer className="link-wrapper">
              <Link href="https://www.linkedin.com/in/yuri-lopes-machado/">
                  <a target="_blank">Linkedin</a>
              </Link>
          </footer> 
      </section>
    </>
  )
}

export default Home

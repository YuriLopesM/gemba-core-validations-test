import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { parseCookies, setCookie } from 'nookies';
import { getAPIClient } from '../services/axios';

const Home: NextPage = () => {
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  const { ['@core:token']: token } = parseCookies(ctx);
  let permissions: String[] = [];

  if (!token) {
    setCookie(ctx, '@core:redirect_pathname', `http://${ctx.req.headers.host}/${ctx.locale}/${ctx.resolvedUrl}`, {
        maxAge: 60 * 60 * 2 
    })
    return {
        redirect: {
            destination: 'http://vancouver:3000/',
            permanent: false
        }
    }
}
  await apiClient.post('/login')
    .then((response) => {
      permissions = response.data;
    }, (error) => {
      console.log(error);
    })
    
  if (!permissions.length){
    return {
      redirect: {
        destination: '404',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default Home

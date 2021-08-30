import Image from 'next/image';
import Head from 'next/head';
import { Container } from '../../styles/404';

import robotoImg from '../../../public/assets/images/ErrorRobot.svg';
import { useRouter } from 'next/router';

export default function Custom404() {
    const router = useRouter()
    
    return (
        <Container>
            <Head>
                <title>404 Error!</title>
            </Head> 
            <div>
                <h1>Oops...</h1>
                <p>Não achamos a página que você está procurando. Ela pode ter sido removida, renomeada ou nunca existiu.</p>
                <button type="button" onClick={() => router.push('/')}>
                    Voltar para o Início
                </button>
            </div>
            <Image src={robotoImg} alt="404 Error" width={500} height={500} />
        </Container>
    )
}
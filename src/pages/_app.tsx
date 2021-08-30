import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';

import { lightTheme , darkTheme } from '../styles/theme'
import { useTheme } from '../hooks/useTheme'

import { Header } from '../components/Header';
import { Layout } from '../components/Layout'
import { AuthProvider } from '../context/AuthContext';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const showHeader = router.pathname === '/login' || router.pathname === '/404' ? false : true;
  
  return (
    <AuthProvider>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        { showHeader && <Header changeTheme={toggleTheme} theme={theme}/>}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  )
}
export default MyApp

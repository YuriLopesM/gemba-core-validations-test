import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';

import { lightTheme , darkTheme } from '../styles/theme'
import { useTheme } from '../hooks/useTheme'

import { Header } from '../components/Header';
import { Layout } from '../components/Layout'
import { AuthProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <AuthProvider>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Header changeTheme={toggleTheme} theme={theme}/>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  )
}
export default MyApp

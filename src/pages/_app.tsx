import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global';

import { lightTheme , darkTheme } from '../styles/theme'

import { useTheme } from '../hooks/useTheme'
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Header changeTheme={toggleTheme} theme={theme}/>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
export default MyApp

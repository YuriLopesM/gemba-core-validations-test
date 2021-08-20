import { createGlobalStyle } from 'styled-components';

interface ITheme { 
  accent: string,
  info: string, 

  danger: string,
  warning: string, 
  success: string,

  details: string, 
  background: string,

  neutral_900: string,
  neutral_800: string,
  neutral_700: string,
  neutral_600: string,
  neutral_500: string, 
  neutral_400: string,
  neutral_300: string, 
  neutral_200: string,
  neutral_100: string
}

export const GlobalStyle = createGlobalStyle<{theme: ITheme}>`
  :root {
    --white: #FFFFFF;
    --details: ${({ theme }) => theme.details };
    --background: ${({ theme }) => theme.background};

    --accent: ${({ theme }) => theme.accent};
    --info: ${({ theme }) => theme.info };
    --danger: ${({ theme }) => theme.danger};
    --warning: ${({ theme }) => theme.warning};
    --success: ${({ theme }) => theme.success};

    --text: ${({ theme }) => theme.neutral_800};
    --subtext: ${({ theme }) => theme.neutral_600};
    
    --neutral_900: ${({ theme }) => theme.neutral_900};
    --neutral_800: ${({ theme }) => theme.neutral_800};
    --neutral_700: ${({ theme }) => theme.neutral_700};
    --neutral_600: ${({ theme }) => theme.neutral_600};
    --neutral_500: ${({ theme }) => theme.neutral_500};
    --neutral_400: ${({ theme }) => theme.neutral_400};
    --neutral_300: ${({ theme }) => theme.neutral_300};
    --neutral_200: ${({ theme }) => theme.neutral_200};
    --neutral_100: ${({ theme }) => theme.neutral_100};
    
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body { 
    background: var(--background);
    color: var(--text);
    transition: background 0.4s ease-in, color 0.4s ease-in;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;

    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body, input, textarea, select, button {
    font: 400 1rem Roboto, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Montserrat, sans-serif;
  }


  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

`

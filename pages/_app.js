import { createGlobalStyle, ThemeProvider } from 'styled-components'


const theme = {
  colors: {
    primary: '#2E363E',
    btn_primary: '#425AE6',
    btn_text_color: '#F5F9FC',
    bg: '#F5F9FC'
  },
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${theme.colors.bg};
    color: ${theme.colors.primary};
    font-family: 'Roboto', sans-serif;
  }
  button {
    border: none;
    color: ${theme.colors.btn_text_color};
  }
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    :visited {
      color: ${theme.colors.primary};
    }
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

import { createGlobalStyle, ThemeProvider } from 'styled-components'


const theme = {
  colors: {
    primary: '#FFFFFF',
    bg: '#2C2F33'
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

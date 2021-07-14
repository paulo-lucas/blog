import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/globals'
import * as theme from 'constants/theme'

function App({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
    </Head>
    <GlobalStyles />

    <ThemeProvider theme={theme} >
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  </>
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  width: 100vw;
  max-width: 1440px;
  min-height: 100vh;
  margin: auto;
  padding: 10vh 10%;

  @media(max-width: 800px) {
    padding: 10vh 5%;
  }
`

export default App

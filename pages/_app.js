import Head from 'next/head'

import '../styles/globals.css'
import styled from 'styled-components'
import { colors } from '../constants/theme'

function App({ Component, pageProps }) {
  return <Container>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </Container>
}

const Container = styled.div`
  background-color: ${colors.dark};
  width: 100vw;
  max-width: 1440px;
  min-height: 100vh;
  margin: auto;
  padding: 10vh 10%;

  * {
    color: white;
  }

  @media(max-width: 800px) {
    padding: 10vh 5%;
  }
`

export default App

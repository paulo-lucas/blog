import Head from 'next/head'

import styled from 'styled-components'

function Home() {
  return (
    <div>
      <Head>
        <title>Home - Paulo Cerqueira</title>
        <meta name="description" content="Bio" />
      </Head>
      
      <Header>
        <h1>Olá!</h1>
        <h1>Me chamo Paulo</h1>
        <p>e sou desenvolvedor tal stack, criei esse blog para compartilhar meus conhecimentos em programação e outros assuntos, espero que goste!</p>
      </Header>
    </div>
  )
}

const Header = styled.header`
  h1 {
    font-family: Ubuntu;
    font-weight: bold;
    font-size: 96px;
    line-height: 110px;
    letter-spacing: -1.5px;
  }

  p {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
  }
`

export default Home

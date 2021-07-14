import Head from 'next/head'
import styled from 'styled-components'
import dbConnect from 'services/dbConnect'
import Tag from 'models/Tag'

import Tags from 'components/Tags'
import ContactButtons from 'components/ContactButtons'

function Home({ tags }) {
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
        <ContactButtons size={210} />
      </Header>

      <Tags data={tags} />
    </div>
  )
}

export async function getStaticProps() {
  await dbConnect()
  const tags = await Tag.find({}, { _id: 0 }).lean()

  return {
    props: {
      tags
    }
  }
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
    margin: 20px 0;
    max-width: 60%;
  }

  @media(max-width: 800px) {
    h1 {
      font-size: 36px;
      line-height: 41px;
    }

    p {
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
      max-width: none;
    }
  }
`

export default Home

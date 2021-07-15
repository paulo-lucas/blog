import Head from 'next/head'
import dbConnect from 'services/dbConnect'
import Post from 'models/Post'
import Tag from 'models/Tag'
import Image from 'components/Image'

function TagPage({ tag, posts }) {
  return <>
    <Head>
      <title>{tag.name} - Paulo Cerqueira</title>
      <meta name="description" content={`Artigos sobre ${tag.name}.`} />
    </Head>

    <Image
      src={tag.image_path}
      width={100}
      height={100}
    />
  </>
}

export async function getStaticProps({ params }) {
  await dbConnect()
  const tag = await Tag.findOne({ alias: params.id }, { _id: 0 }).lean()
  const posts = await Post.find()

  return {
    props: {
      posts: [1, 2, 3],
      tag
    }
  }
}

export async function getStaticPaths() {
  await dbConnect()
  const tags = await Tag.find({}, { _id: 0 }).lean()

  const paths = tags.map(tag => ({
    params: { id: tag.alias }
  }))

  return { paths, fallback: false }
}

export default TagPage
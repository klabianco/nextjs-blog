import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        color: '#666666',
      },
      // styles for the `a`
      a: {
        color: 'blue.700',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
})

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <ChakraProvider theme={theme}>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <p>Hi I'm Kevin, a software engineer getting into the web3 space.  Find me on twitter <a href="https://twitter.com/klabianco" target="_blank">@klabianco</a> I'm also on <a href='https://opensea.io/kevinl' target='_blank'>opensea</a>.</p><br></br>
      <p mt={5}>This site uses <a href="https://chakra-ui.com/" target="_blank">ChakraUI</a></p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
    </ChakraProvider>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
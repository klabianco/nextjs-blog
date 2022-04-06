import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import { Button } from '@chakra-ui/react'
import { FaTwitter } from 'react-icons/fa';



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
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>GM! I'm Kevin, a software engineer in the web3 space focusing on react, typescript, and solidity smart contracts. Also experienced w/ Polygon, Graph, and IPFS/Piñata.<br/><br /> Let's buidl!</p>
      </section>
      <section className={utilStyles.headingMD} style={{marginTop: 10 + 'px'}}>
        <a href='https://twitter.com/klabianco' target="_blank">
        <Button colorScheme='twitter' leftIcon={<FaTwitter />} w='100%'>
    Twitter
  </Button>
        </a>
      </section>

    </Layout>
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
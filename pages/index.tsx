import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import { Button } from '@chakra-ui/react'
import { FaTwitter } from 'react-icons/fa';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
//import ConnectButton from '../components/connectButton'
import { DAppProvider } from "@usedapp/core";

// gm world

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
    <DAppProvider config={{}}>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd} style={{textAlign: 'center'}}>
        <p>GM 👋 I'm Kevin -- a software engineer (web1/2 since I was a kid) who's now in the web3 space and loving it! 😊<br />Focusing on <a href="https://reactjs.org/" target="_blank">React</a>, <a href="https://www.typescriptlang.org/" target="_blank">Typescript</a>, and <a href="https://soliditylang.org/" target="_blank">Solidity</a> and related tech.<br/>Also experienced w/ <a href="https://polygon.technology/" target="_blank">Polygon</a>, <a href="https://thegraph.com/en/" target="_blank">The Graph</a>, and <a href="https://pinata.cloud/" target="_blank">IPFS/Piñata</a>.<br/><br /> Shoot me a tweet and let's buidl!</p>
    
      <TwitterTimelineEmbed
  sourceType="profile"
  screenName="klabianco"
  options={{height: 400}}
/>
      </section>
      <section className={utilStyles.headingMD} style={{marginTop: 10 + 'px'}}>
        <a href='https://twitter.com/klabianco' target="_blank">
        <Button colorScheme='twitter' leftIcon={<FaTwitter />} w='100%'>
    Twitter
  </Button>
        </a>
      </section>

    </Layout>
    </DAppProvider>
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
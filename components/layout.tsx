import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { MetaMaskProvider } from "metamask-react";
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

const name = 'Kevin Labianco'
export const siteTitle = '👋 Kevin Labianco - Web3 Software Engineer'
const pfp = 'https://pbs.twimg.com/profile_images/1510080932060942349/ggNHijDH_400x400.jpg';
const pfpImg = () => {
  return pfp;
}

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <ChakraProvider theme={theme}>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Kevin Labianco is a web3 software engineer, specializing in React, Typescript, and Solidity.  Contact: klabianco@gmail.com"
          />
          <meta
            property="og:image"
            content={pfp}
          />
          <meta name="og:title" content={siteTitle} />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-MNY9WX904K"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MNY9WX904K', { page_path: window.location.pathname });
            `,
            }}
          />
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                loader={pfpImg}
                src="me.png"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    loader={pfpImg}
                    src="me.png"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </ChakraProvider>
  )
}
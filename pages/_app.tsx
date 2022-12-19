import 'styles/reset.css'
import 'styles/global.css'
import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { SWRConfig } from 'swr'
import { BackgroundImage } from 'styles/components/home/image'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nostalgic - Every Ones Weekend</title>
        <meta name='description' content='eow' />
        <link rel='icon' href='/image/profile.png' />
      </Head>
      <ThemeProvider theme={theme}>
        <SWRConfig value={{ suspense: true }}>
          <BackgroundImage
            url='/image/black-cover-1.jpeg'
            style={{ backgroundSize: 'contain' }}
          >
            <Component {...pageProps} />
          </BackgroundImage>
        </SWRConfig>
      </ThemeProvider>
    </>
  )
}

export default MyApp

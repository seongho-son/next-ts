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
        <title>Nostalgic - history blog</title>
        <meta name='description' content='history blog' />
        <link rel='icon' href='/image/profile.png' />
      </Head>
      <ThemeProvider theme={theme}>
        <SWRConfig value={{ suspense: true }}>
          <BackgroundImage url='/image/black-cover-2.jpeg'>
            <Component {...pageProps} />
          </BackgroundImage>
        </SWRConfig>
      </ThemeProvider>
    </>
  )
}

export default MyApp

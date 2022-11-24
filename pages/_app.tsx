import 'styles/reset.css'
import 'styles/global.css'
import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { SWRConfig } from 'swr'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nostalgic | life is good</title>
        <meta name='description' content='life is good' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ThemeProvider theme={theme}>
        <SWRConfig value={{ suspense: true }}>
          <Component {...pageProps} />
        </SWRConfig>
      </ThemeProvider>
    </>
  )
}

export default MyApp

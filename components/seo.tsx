import React from 'react'
import Head from 'next/head'

interface SeoProps {
  title: string
  description: string
}

export const Seo: React.FC<SeoProps> = ({ title, description }) => {
  return (
    <Head>
      <title>DAN | {title}</title>
      <meta name='description' content={description} />
    </Head>
  )
}

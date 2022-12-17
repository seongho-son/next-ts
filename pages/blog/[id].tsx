import React from 'react'
import { NextPage } from 'next'
import { Column, Media } from 'styles/components/common/layout'
import { theme } from 'styles/theme'
import Image from 'next/image'
import { BaseText, DescText, HeaderText } from 'styles/components/common/text'
import { Float } from 'components/common/float'
import { Frame } from 'components/common/frame'
import { useRouter } from 'next/router'

const Post: NextPage = () => {
  const router = useRouter()
  return (
    <Frame>
      <Column style={{ backgroundColor: theme.color.background }}>
        <Media>
          <Column style={{ alignItems: 'center', gap: 40, padding: '40px 0' }}>
            <Column style={{ alignItems: 'center' }}>
              <HeaderText fontFamily='L'>Hello Welcome to World</HeaderText>
              <BaseText
                style={{
                  color: theme.color.gray3,
                  fontWeight: theme.weight.bold,
                }}
              >
                8월 11일, 2022
              </BaseText>
            </Column>
            <Image
              src={`/image/item-14.jpeg`}
              alt='post'
              width={800}
              height={500}
            />
            <Column>
              <DescText>
                hello world hello world hello world hello worldhello world hello
                world hello world hello worldhello world hello world hello world
                hello worldhello world hello world hello world hello worldhello
                world hello world hello world hello worldhello world hello world
                hello world hello worldhello world hello world hello world hello
                world
                {`\n\n`}
                hello world hello world hello world hello worldhello world hello
                world hello world hello worldhello world hello world hello world
                hello worldhello world hello world hello world hello worldhello
                world hello world hello world hello worldhello world hello world
                hello world hello worldhello world hello world hello world hello
                world hello world hello world hello world hello worldhello world
                hello world hello world hello worldhello world hello world hello
                world hello worldhello world hello world hello world hello
                worldhello world hello world hello world hello worldhello world
                hello world hello world hello worldhello world hello world hello
                world hello world
              </DescText>
            </Column>
          </Column>
        </Media>
      </Column>
      <Float />
    </Frame>
  )
}

export default Post

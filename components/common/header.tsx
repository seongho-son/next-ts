import React from 'react'
import Image from 'next/image'
import { Column, Media, Row } from 'styles/components/layout'
import { H1Text } from 'styles/components/text'
import { theme } from 'styles/theme'

export const Header: React.FC = () => {
  return (
    <Column
      style={{
        height: 100,
        marginBottom: 40,
        justifyContent: 'center',
        backgroundColor: theme.color.black1,
        borderBottom: `0.5px solid ${theme.color.black2}`,
      }}
    >
      <Media>
        <Row style={{ justifyContent: 'space-between' }}>
          <Row style={{ gap: 10 }}>
            <Image
              src='/icon/brand-github-white.svg'
              alt='github'
              width={24}
              height={24}
            />
            <Image
              src='/icon/email-forward-white.svg'
              alt='email'
              width={24}
              height={24}
            />
            <Image src='/icon/at-white.svg' alt='at' width={24} height={24} />
          </Row>
          <H1Text style={{ color: theme.color.white1 }}>Nostalgic.</H1Text>
        </Row>
      </Media>
    </Column>
  )
}

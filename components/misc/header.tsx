import React from 'react'
import Image from 'next/image'
import { Column, Media, Row } from 'styles/components/common/layout'
import { HeaderText } from 'styles/components/common/text'
import { theme } from 'styles/theme'
import { Dropdown } from 'components/common/dropdown'

export const Header: React.FC = () => {
  return (
    <Row style={{ justifyContent: 'center', zIndex: 1 }}>
      <Column
        style={{
          justifyContent: 'center',
          position: 'fixed',
        }}
      >
        <Media
          style={{
            borderBottom: `0.5px solid ${theme.color.black2}`,
            padding: '20px 0',
          }}
        >
          <Row
            style={{
              justifyContent: 'space-between',
            }}
          >
            <Row
              style={{
                marginBlockStart: 'auto',
              }}
            >
              <Dropdown value='Categories' onClick={() => {}} />
            </Row>
            <HeaderText
              fontFamily='L'
              style={{
                color: theme.color.white,
              }}
            >
              Nostalgic.
            </HeaderText>
            <Row
              style={{
                gap: 15,
                marginBlockStart: 'auto',
              }}
            >
              <a
                href='https://github.com/devshon'
                target='_blank'
                rel='noreferrer noopener'
              >
                <Image
                  src='/icon/brand-github-white.svg'
                  alt='github'
                  width={24}
                  height={24}
                />
              </a>
              <a
                href='https://devshon.github.io'
                target='_blank'
                rel='noreferrer noopener'
              >
                <Image
                  src='/icon/email-forward-white.svg'
                  alt='email'
                  width={24}
                  height={24}
                />
              </a>
              <a
                href='https://devshon.github.io'
                target='_blank'
                rel='noreferrer noopener'
              >
                <Image
                  src='/icon/at-white.svg'
                  alt='blog'
                  width={24}
                  height={24}
                />
              </a>
            </Row>
          </Row>
        </Media>
      </Column>
    </Row>
  )
}

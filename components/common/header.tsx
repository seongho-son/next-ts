import React from 'react'
import styled from 'styled-components'
import { Media, Row } from 'styles/components/common/layout'
import { HeaderText } from 'styles/components/common/text'
import { theme } from 'styles/theme'
import Link from 'next/link'
import { AiFillGithub, AiFillMail, AiFillRead } from 'react-icons/ai'

export const Header: React.FC = () => {
  return (
    <Row style={{ justifyContent: 'center' }}>
      <Media>
        <Row style={{ justifyContent: 'space-between', padding: '20px 0' }}>
          <Link href='/'>
            <HeaderText
              fontFamily='L'
              style={{
                color: theme.color.white,
                cursor: 'pointer',
              }}
            >
              Nostalgic.
            </HeaderText>
          </Link>
          <Row style={{ marginBlockStart: 'auto' }}>
            <IconContainer>
              <a
                href='https://github.com/devshon'
                target='_blank'
                rel='noreferrer noopener'
              >
                <AiFillGithub size='24' />
              </a>
              <a
                href='https://devshon.github.io'
                target='_blank'
                rel='noreferrer noopener'
              >
                <AiFillMail size='24' />
              </a>
              <a
                href='https://devshon.github.io'
                target='_blank'
                rel='noreferrer noopener'
              >
                <AiFillRead size='24' />
              </a>
            </IconContainer>
          </Row>
        </Row>
      </Media>
    </Row>
  )
}

const IconContainer = styled(Row)`
  gap: 15px;
  svg {
    transition: 0.2s;
    color: ${(p) => p.theme.color.gray4};
    :hover {
      color: ${(p) => p.theme.color.gray3};
    }
  }
`

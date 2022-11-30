import React from 'react'
import styled from 'styled-components'
import { Column, Media, Row } from 'styles/components/common/layout'
import { AiFillGithub, AiFillMail, AiFillRead } from 'react-icons/ai'
import { BaseText, H5Text } from 'styles/components/common/text'
import { theme } from 'styles/theme'

export const Footer: React.FC = () => {
  return (
    <Row style={{ backgroundColor: theme.color.black2 }}>
      <Media style={{ padding: '20px 0 60px' }}>
        <Row style={{ gap: 100 }}>
          <Column style={{ gap: 10 }}>
            <H5Text
              style={{
                color: theme.color.white,
                fontWeight: theme.weight.bold,
              }}
            >
              Contact
            </H5Text>
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
          </Column>
          <Column style={{ gap: 10 }}>
            <H5Text
              style={{
                color: theme.color.white,
                fontWeight: theme.weight.bold,
              }}
            >
              Segment
            </H5Text>
            <BaseText style={{ color: theme.color.white }}>option</BaseText>
            <BaseText style={{ color: theme.color.white }}>option</BaseText>
          </Column>
          <Column style={{ gap: 10 }}>
            <H5Text
              style={{
                color: theme.color.white,
                fontWeight: theme.weight.bold,
              }}
            >
              Segment
            </H5Text>
            <BaseText style={{ color: theme.color.white }}>option</BaseText>
            <BaseText style={{ color: theme.color.white }}>option</BaseText>
            <BaseText style={{ color: theme.color.white }}>option</BaseText>
          </Column>
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

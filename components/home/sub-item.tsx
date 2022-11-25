import React from 'react'
import {
  BackgroundContainer,
  BackgroundImage,
  BackgroundWrapper,
} from 'styles/components/home/image'
import { Column } from 'styles/components/layout'
import { DescText, H2Text } from 'styles/components/text'
import { theme } from 'styles/theme'

interface SubItemProps {
  url: string
  title: string
  subject: string
}

export const SubItem: React.FC<SubItemProps> = ({ url, title, subject }) => {
  return (
    <BackgroundContainer style={{ width: 400, height: 300 }}>
      <Column style={{ padding: 20, height: '100%', justifyContent: 'end' }}>
        <H2Text
          fontFamily='L'
          style={{
            zIndex: 1,
            color: theme.color.white1,
            fontWeight: theme.weight.bold,
          }}
        >
          {title}
        </H2Text>
        <DescText
          style={{ color: theme.color.white1, fontSize: theme.size.h5 }}
        >
          {subject}
        </DescText>
      </Column>
      <BackgroundWrapper>
        <BackgroundImage url={url} style={{ width: 400, height: 300 }} />
      </BackgroundWrapper>
    </BackgroundContainer>
  )
}

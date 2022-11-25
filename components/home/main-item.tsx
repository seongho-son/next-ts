import React from 'react'
import {
  BackgroundContainer,
  BackgroundImage,
  BackgroundWrapper,
} from 'styles/components/home/image'
import { Column } from 'styles/components/layout'
import { DescText, HeaderText } from 'styles/components/text'
import { theme } from 'styles/theme'

interface MainItemProps {
  url: string
  title: string
  subject: string
}

export const MainItem: React.FC<MainItemProps> = ({ url, title, subject }) => {
  return (
    <BackgroundContainer style={{ width: 660, height: 600 }}>
      <Column style={{ padding: 20, height: '100%', justifyContent: 'end' }}>
        <HeaderText
          fontFamily='L'
          style={{
            zIndex: 1,
            color: theme.color.white1,
            fontWeight: theme.weight.bold,
          }}
        >
          {title}
        </HeaderText>
        <DescText
          style={{ color: theme.color.white1, fontSize: theme.size.h3 }}
        >
          {subject}
        </DescText>
      </Column>
      <BackgroundWrapper>
        <BackgroundImage url={url} style={{ width: 660, height: 600 }} />
      </BackgroundWrapper>
    </BackgroundContainer>
  )
}

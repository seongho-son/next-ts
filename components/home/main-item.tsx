import React from 'react'
import {
  BackgroundContainer,
  BackgroundImage,
  BackgroundWrapper,
} from 'styles/components/home/image'
import { Column } from 'styles/components/common/layout'
import { DescText, HeaderText } from 'styles/components/common/text'
import { theme } from 'styles/theme'

interface MainItemProps {
  url: string
  title: string
  subject: string
}

export const MainItem: React.FC<MainItemProps> = ({ url, title, subject }) => {
  return (
    <BackgroundContainer style={{ width: 660, height: 500 }}>
      <Column style={{ padding: 20, height: '100%', justifyContent: 'end' }}>
        <HeaderText
          fontFamily='L'
          style={{
            zIndex: 1,
            color: theme.color.white,
            fontWeight: theme.weight.bold,
          }}
        >
          {title}
        </HeaderText>
        <DescText style={{ color: theme.color.white, fontSize: theme.size.h3 }}>
          {subject}
        </DescText>
      </Column>
      <BackgroundWrapper>
        <BackgroundImage url={url} style={{ width: 660, height: 500 }} />
      </BackgroundWrapper>
    </BackgroundContainer>
  )
}

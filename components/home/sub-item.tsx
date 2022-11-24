import React from 'react'
import {
  BackgroundContainer,
  BackgroundImage,
  BackgroundWrapper,
} from 'styles/components/home/image'
import { Column } from 'styles/components/layout'
import { H2Text } from 'styles/components/text'
import { theme } from 'styles/theme'

interface SubItemProps {
  url: string
}

export const SubItem: React.FC<SubItemProps> = ({ url }) => {
  return (
    <BackgroundContainer style={{ width: 400, height: 300 }}>
      <Column>
        <H2Text style={{ color: theme.color.white1 }}>Content</H2Text>
      </Column>
      <BackgroundWrapper>
        <BackgroundImage url={url} style={{ width: 400, height: 300 }} />
      </BackgroundWrapper>
    </BackgroundContainer>
  )
}

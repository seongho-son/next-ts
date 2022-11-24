import React from 'react'
import styled from 'styled-components'
import {
  BackgroundContainer,
  BackgroundImage,
  BackgroundWrapper,
} from 'styles/components/home/image'
import { Column } from 'styles/components/layout'
import { H1Text } from 'styles/components/text'
import { theme } from 'styles/theme'

interface MainItemProps {
  url: string
}

export const MainItem: React.FC<MainItemProps> = ({ url }) => {
  return (
    <BackgroundContainer style={{ width: 660, height: 600 }}>
      <Column>
        <H1Text style={{ color: theme.color.white1 }}>Content</H1Text>
      </Column>
      <BackgroundWrapper>
        <BackgroundImage url={url} style={{ width: 660, height: 600 }} />
      </BackgroundWrapper>
    </BackgroundContainer>
  )
}

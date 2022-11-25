import React from 'react'
import styled from 'styled-components'
import {
  BackgroundContainer,
  BackgroundImage,
  BackgroundWrapper,
} from 'styles/components/home/image'
import { Column } from 'styles/components/layout'
import { theme } from 'styles/theme'

interface ListItemProps {
  imageUrl?: string
}

const WIDTH = 300
const IMAGE_HEIGHT = 350

export const ListItem: React.FC<ListItemProps> = ({ imageUrl }) => {
  return (
    <Main>
      {imageUrl && (
        <BackgroundContainer style={{ height: IMAGE_HEIGHT }}>
          <CoverImageWrapper>
            <CoverImage className='coverImage' url={imageUrl} />
          </CoverImageWrapper>
        </BackgroundContainer>
      )}
      <Column
        style={{
          minHeight: 200,
          border: `1px solid ${theme.color.background}`,
          backgroundColor: theme.color.white1,
        }}
      />
    </Main>
  )
}

const Main = styled(Column)`
  width: ${WIDTH}px;
  height: fit-content;
  cursor: pointer;
  :hover {
    .backgroundWrapper {
      opacity: 0.2;
    }
    .coverImage {
      width: ${WIDTH + 10}px;
      height: ${IMAGE_HEIGHT + 10}px;
    }
  }
`

const CoverImageWrapper = styled(BackgroundWrapper)`
  width: ${WIDTH}px;
  height: ${IMAGE_HEIGHT}px;
  opacity: 1;
  overflow: hidden;
  border: 1px solid ${(p) => p.theme.color.background};
`

const CoverImage = styled(BackgroundImage)`
  width: ${WIDTH}px;
  height: ${IMAGE_HEIGHT}px;
  transition: 0.5s;
`

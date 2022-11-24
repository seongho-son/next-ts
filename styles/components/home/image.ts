import styled from 'styled-components'
import { Column } from '/styles/components/layout'

export const BackgroundContainer = styled(Column)`
  :hover .backgroundWrapper {
    opacity: 0.3;
  }
`

export const BackgroundWrapper = styled(Column).attrs(() => ({
  className: 'backgroundWrapper',
}))`
  z-index: -1;
  position: absolute;
  opacity: 0.6;
  transition: 0.5s;
  cursor: pointer;
`

export const BackgroundImage = styled.div<{ url: string }>`
  background-image: url(${(p) => p.url});
  background-size: cover;
`

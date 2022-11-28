import styled from 'styled-components'
import { Column } from 'styles/components/common/layout'

export const BackgroundContainer = styled(Column)`
  :hover .backgroundWrapper {
    opacity: 0.2;
  }
  background-color: ${(p) => p.theme.color.black1};
`

export const BackgroundWrapper = styled(Column).attrs(() => ({
  className: 'backgroundWrapper',
}))`
  /* z-index: -1; */
  position: absolute;
  opacity: 0.6;
  transition: 0.5s;
  cursor: pointer;
`

export const BackgroundImage = styled.div<{ url: string }>`
  background-image: url(${(p) => p.url});
  background-size: cover;
  background-position: center;
`

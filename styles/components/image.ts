import styled from 'styled-components'

export const BackgroundImage = styled.div<{ url: string }>`
  background-image: url(${(p) => p.url});
  background-size: cover;
`

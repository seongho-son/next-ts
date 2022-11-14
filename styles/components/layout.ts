import styled from 'styled-components'

const common = { display: 'flex' }

export const Column = styled.div`
  ${common}
  flex-direction: column;
`

export const Row = styled.div`
  ${common}
  flex-direction: row;
`

export const Media = styled.div`
  ${(p) => p.theme.media.desktop} {
    width: 1060px;
    margin: 0 auto;
  }
  ${(p) => p.theme.media.mobile} {
    padding: 0 20px;
  }
`

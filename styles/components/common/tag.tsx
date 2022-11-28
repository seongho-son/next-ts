import styled from 'styled-components'
import { Row } from 'styles/components/common/layout'

export const Tag = styled(Row)`
  padding: 5px 30px;
  background-color: ${(p) => p.theme.color.black1};
  color: ${(p) => p.theme.color.white};
  font-weight: ${(p) => p.theme.weight.bold};
  border-radius: 4px;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    background-color: ${(p) => p.theme.color.black1}cc;
  }
  :active {
    background-color: ${(p) => p.theme.color.black1}ee;
  }
`

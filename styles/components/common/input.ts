import styled from 'styled-components'

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${(p) => p.theme.color.white};
  background-color: ${(p) => p.theme.color.black1};
  color: ${(p) => p.theme.color.white};
  :focus {
    outline: none;
  }
`

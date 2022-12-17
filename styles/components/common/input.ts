import styled from 'styled-components'

export const Input = styled.input`
  padding: 12px 0;
  border: 0;
  border-bottom: 1px solid ${(p) => p.theme.color.white};
  background-color: ${(p) => p.theme.color.black1};
  color: ${(p) => p.theme.color.white};
  :focus {
    outline: none;
  }
`

export const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid ${(p) => p.theme.color.white};
  background-color: ${(p) => p.theme.color.black1};
  color: ${(p) => p.theme.color.white};
  :focus {
    outline: none;
  }
`

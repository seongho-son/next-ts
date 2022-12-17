import styled from 'styled-components'

export const Button = styled.button`
  padding: 16px 0;
  transition: 0.2s;
  border: 0;
  border-radius: 50px;
  justify-content: 'center';
  color: ${(p) => p.theme.color.white};
  background-color: ${(p) => p.theme.color.primary};
  font-weight: ${(p) => p.theme.weight.bold};
  cursor: pointer;
  span {
    color: ${(p) => p.theme.color.white};
  }
  :hover {
    background-color: ${(p) => p.theme.color.primary}cc;
  }
  :active {
    background-color: ${(p) => p.theme.color.primary}ee;
  }
`

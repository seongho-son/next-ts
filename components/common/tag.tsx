import React from 'react'
import styled from 'styled-components'
import { Row } from 'styles/components/layout'
import { H5Text } from 'styles/components/text'
import { theme } from 'styles/theme'

interface TagProps {
  name: string
}

export const Tag: React.FC<TagProps> = ({ name }) => {
  return (
    <Main>
      <H5Text style={{ fontWeight: theme.weight.medium }}>{name}</H5Text>
    </Main>
  )
}

const Main = styled(Row)`
  padding: 5px 20px;
  border: 1px solid ${(p) => p.theme.color.background};
  background-color: ${(p) => p.theme.color.white1};
  border-radius: 50px;
  transition: 0.2s;
  cursor: pointer;
  span {
    transition: 0.2s;
  }
  :hover {
    background-color: ${(p) => p.theme.color.primary};
    span {
      color: ${(p) => p.theme.color.white1};
    }
  }
`

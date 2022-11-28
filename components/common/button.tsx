import React from 'react'
import styled from 'styled-components'
import { Row } from 'styles/components/common/layout'
import { BaseText } from 'styles/components/common/text'
import { theme } from 'styles/theme'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClick } = props

  return (
    <ButtonMain onClick={onClick}>
      <BaseText style={{ fontWeight: theme.weight.bold }}>{children}</BaseText>
    </ButtonMain>
  )
}

const ButtonMain = styled(Row)`
  flex: 1;
  transition: 0.2s;
  padding: 15px 20px;
  border-radius: 50px;
  justify-content: center;
  color: ${(p) => p.theme.color.white};
  background-color: ${(p) => p.theme.color.primary};
  cursor: pointer;
  :hover {
    background-color: ${(p) => p.theme.color.primary}cc;
  }
`

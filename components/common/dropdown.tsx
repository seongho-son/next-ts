import React from 'react'
import styled from 'styled-components'
import { Row } from 'styles/components/common/layout'
import { BaseText } from 'styles/components/common/text'
import { theme } from 'styles/theme'
import { AiOutlineDown } from 'react-icons/ai'

interface DropdownProps {
  value: string
  onClick: () => void
  children: React.ReactNode
}

export const Dropdown: React.FC<DropdownProps> = ({
  value,
  onClick,
  children,
}) => {
  return (
    <Main onClick={onClick}>
      <BaseText
        style={{
          fontWeight: theme.weight.medium,
          color: theme.color.gray4,
        }}
      >
        {value}
      </BaseText>
      <AiOutlineDown style={{ color: theme.color.gray4 }} size='14' />
      <Menu className='menu'>{children}</Menu>
    </Main>
  )
}

const Main = styled(Row)`
  position: relative;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  svg {
    transition: 0.2s;
  }
  .menu {
    display: none;
  }
  :hover {
    @keyframes comeUpMenu {
      0% {
        top: 35px;
        opacity: 0;
      }
    }
    svg {
      transform: rotate(180deg);
    }
    .menu {
      animation: comeUpMenu 0.8s;
      display: flex;
    }
  }
`

const Menu = styled(Row)`
  width: 140px;
  z-index: 100;
  top: 25px;
  right: 0px;
  justify-content: end;
  position: absolute;
  padding: 20px;
  opacity: 0.9;
  border-radius: 4px;
  background-color: ${(p) => p.theme.color.black1};
`

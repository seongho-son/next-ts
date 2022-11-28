import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { Column, Row } from 'styles/components/common/layout'
import { BaseText } from 'styles/components/common/text'
import { theme as _theme } from 'styles/theme'
import { MenuExtends } from 'components/common/menu'

interface DropdownProps {
  value: string
  onClick: () => void
  theme?: 'dark' | 'light'
}

export const Dropdown: React.FC<DropdownProps> = ({
  value,
  onClick,
  theme,
}) => {
  const isDark = !theme || theme === 'dark'

  return (
    <Main onClick={onClick}>
      <BaseText
        style={{
          fontWeight: _theme.weight.bold,
          color: isDark ? _theme.color.white : _theme.color.black2,
        }}
      >
        {value}
      </BaseText>
      <Image
        className='icon'
        src={`/icon/chevron-up-${isDark ? 'white' : 'gray1'}.svg`}
        width={18}
        height={18}
        alt='down'
      />
      <MenuExtends />
    </Main>
  )
}

const Main = styled(Row)`
  position: relative;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  .icon {
    transition: 0.2s;
  }
  .menu {
    display: none;
  }
  :hover {
    @keyframes comeUpMenu {
      0% {
        top: 90px;
        opacity: 0;
      }
      100% {
        top: 80px;
      }
    }
    .icon {
      transform: rotate(180deg);
    }
    .menu {
      animation: comeUpMenu 0.8s;
      display: flex;
    }
  }
`

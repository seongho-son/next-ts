import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Row } from 'styles/components/common/layout'

export const Float: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => setScrollY(window.scrollY)

  return (
    <Main
      style={{ display: scrollY < 740 ? 'none' : '' }}
      onClick={() =>
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      }
    >
      <Image
        src='/icon/arrow-narrow-up-white.svg'
        width={24}
        height={24}
        alt='up'
      />
    </Main>
  )
}

const Main = styled(Row)`
  width: 55px;
  height: 55px;
  border-radius: 100%;
  background-color: ${(p) => p.theme.color.primary};
  z-index: 100;
  position: fixed;
  right: 40px;
  bottom: 40px;
  justify-content: center;
  transition: 0.2s;
  box-shadow: 0px 2px 8px 0px #14141485;
  cursor: pointer;
  @keyframes comeUpFloat {
    0% {
      bottom: 0px;
    }
    100% {
      bottom: 40px;
    }
  }
  animation: comeUpFloat 0.8s;
  :hover {
    background-color: ${(p) => p.theme.color.primary}cc;
  }
  :active {
    background-color: ${(p) => p.theme.color.primary}ee;
  }
`

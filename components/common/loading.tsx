import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Column, Row } from 'styles/components/common/layout'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { theme } from 'styles/theme'

export const Loading: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500)
  }, [])
  return (
    <Main style={{ display: isLoading ? 'flex' : 'none' }}>
      <LoadingBar />
      <AiOutlineLoading3Quarters size={50} color={theme.color.white} />
    </Main>
  )
}

const Main = styled(Column)`
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  position: fixed;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.color.black1};
  svg {
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    animation: spin 2s infinite ease-in-out;
  }
`

const LoadingBar = styled(Row)`
  @keyframes progress {
    0% {
      width: 0px;
    }
    100% {
      width: 100%;
    }
  }
  top: 0;
  left: 0;
  height: 5px;
  position: absolute;
  animation: progress 1.5s infinite ease-out;
  background-color: ${(p) => p.theme.color.white};
`

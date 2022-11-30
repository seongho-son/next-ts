import React from 'react'
import { Column, Row } from 'styles/components/common/layout'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { theme } from 'styles/theme'
import styled from 'styled-components'

export const Loading: React.FC = () => {
  return (
    <Main>
      <LoadingBar />
      <AiOutlineLoading3Quarters size={50} color={theme.color.white} />
    </Main>
  )
}

const Main = styled(Column)`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  svg {
    @keyframes Spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    animation: Spin 2s infinite;
  }
`

const LoadingBar = styled(Row)`
  @keyframes Progress {
    0% {
      width: 0px;
    }
    100% {
      width: 100%;
    }
  }
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  position: absolute;
  animation: Progress 3s infinite;
  background-color: ${(p) => p.theme.color.white};
`

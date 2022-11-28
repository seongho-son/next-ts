import React from 'react'
import styled from 'styled-components'
import { Column, Row } from 'styles/components/common/layout'
import { BaseText, H5Text } from 'styles/components/common/text'
import { theme } from 'styles/theme'

interface MenuPropsExtends {}

export const MenuExtends: React.FC<MenuPropsExtends> = () => {
  return (
    <Main className='menu'>
      <Column>
        <H5Text
          style={{ color: theme.color.white, fontWeight: theme.weight.bold }}
        >
          Segment
        </H5Text>
        <BaseText style={{ color: theme.color.white }}>option1</BaseText>
        <BaseText style={{ color: theme.color.white }}>option2</BaseText>
        <BaseText style={{ color: theme.color.white }}>option3</BaseText>
      </Column>
      <Column>
        <H5Text
          style={{ color: theme.color.white, fontWeight: theme.weight.bold }}
        >
          Segment
        </H5Text>
        <BaseText style={{ color: theme.color.white }}>option1</BaseText>
        <BaseText style={{ color: theme.color.white }}>option2</BaseText>
        <BaseText style={{ color: theme.color.white }}>option3</BaseText>
      </Column>
      <Column>
        <H5Text
          style={{ color: theme.color.white, fontWeight: theme.weight.bold }}
        >
          Segment
        </H5Text>
        <BaseText style={{ color: theme.color.white }}>option1</BaseText>
        <BaseText style={{ color: theme.color.white }}>option2</BaseText>
        <BaseText style={{ color: theme.color.white }}>option3</BaseText>
      </Column>
      <Column>
        <H5Text
          style={{ color: theme.color.white, fontWeight: theme.weight.bold }}
        >
          Segment
        </H5Text>
        <BaseText style={{ color: theme.color.white }}>option1</BaseText>
        <BaseText style={{ color: theme.color.white }}>option2</BaseText>
        <BaseText style={{ color: theme.color.white }}>option3</BaseText>
      </Column>
    </Main>
  )
}

const Main = styled(Row)`
  gap: 40px;
  min-width: 200px;
  max-width: 350px;
  flex-wrap: wrap;
  top: 80px;
  position: fixed;
  padding: 20px;
  opacity: 0.8;
  border-radius: 4px;
  background-color: ${(p) => p.theme.color.black1};
`

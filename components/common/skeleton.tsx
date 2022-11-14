import React from 'react'
import styled from 'styled-components'
import { ShadowCard } from 'styles/components/card'
import { Column, Row } from 'styles/components/layout'

export const AcademiesListSkeleton: React.FC = () => {
  return (
    <AcademiesList>
      <AcademiesItem>
        <Row style={{ gap: 20 }}>
          <ImageBox />
          <Column style={{ gap: 10 }}>
            <TextBox />
            <TextBox />
          </Column>
        </Row>
      </AcademiesItem>
      <AcademiesItem>
        <Row style={{ gap: 20 }}>
          <ImageBox />
          <Column style={{ gap: 10 }}>
            <TextBox />
            <TextBox />
          </Column>
        </Row>
      </AcademiesItem>
      <AcademiesItem>
        <Row style={{ gap: 20 }}>
          <ImageBox />
          <Column style={{ gap: 10 }}>
            <TextBox />
            <TextBox />
          </Column>
        </Row>
      </AcademiesItem>
      <AcademiesItem>
        <Row style={{ gap: 20 }}>
          <ImageBox />
          <Column style={{ gap: 10 }}>
            <TextBox />
            <TextBox />
          </Column>
        </Row>
      </AcademiesItem>
      <AcademiesItem>
        <Row style={{ gap: 20 }}>
          <ImageBox />
          <Column style={{ gap: 10 }}>
            <TextBox />
            <TextBox />
          </Column>
        </Row>
      </AcademiesItem>
    </AcademiesList>
  )
}

const AcademiesList = styled(Column)`
  gap: 20px;
`

const AcademiesItem = styled(ShadowCard)`
  flex-direction: row;
  padding: 30px;
  background-color: ${(p) => p.theme.color.white};
`

const ImageBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  background-color: ${(p) => p.theme.color.gray};
`

const TextBox = styled.div`
  width: 300px;
  height: 30px;
  border-radius: 8px;
  background-color: ${(p) => p.theme.color.gray};
`

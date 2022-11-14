import React from 'react'
import { BaseText } from 'styles/components/text'
import { Thumbnail } from 'components/common/image'
import { useAcademies } from 'api/hook'
import styled from 'styled-components'
import { ShadowCard } from 'styles/components/card'
import { Column } from 'styles/components/layout'

export const AcademiesList: React.FC = () => {
  const { data } = useAcademies()
  return (
    <List>
      {data?.map((academy) => (
        <Item key={academy.id}>
          <Thumbnail
            src='/thumbnail/vMS-98b9Uv5DQrOxrNSmIl3R.jpeg'
            height={100}
            width={100}
            alt='thumbnail'
          />
          <Column>
            <BaseText>{academy.name}</BaseText>
            <BaseText>{academy.closeAt} 운영 종료</BaseText>
            <BaseText>무용, 댄스</BaseText>
            <BaseText>
              {academy.location} {academy.address}
            </BaseText>
          </Column>
        </Item>
      ))}
    </List>
  )
}

const List = styled(Column)`
  gap: 20px;
`

const Item = styled(ShadowCard)`
  flex-direction: row;
  gap: 20px;
  padding: 30px;
  background-color: ${(p) => p.theme.color.white};
`

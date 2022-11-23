import React from 'react'
import styled from 'styled-components'
import { BaseText } from 'styles/components/text'
import { Thumbnail } from 'components/common/image'
import { ShadowCard } from 'styles/components/card'
import { Column } from 'styles/components/layout'
import { Blog } from 'infra/type'

export const BlogItem: React.FC<{
  item: Blog
}> = ({ item }) => {
  return (
    <Item key={item.id}>
      <Thumbnail
        src='/thumbnail/vMS-98b9Uv5DQrOxrNSmIl3R.jpeg'
        height={100}
        width={100}
        alt='thumbnail'
        priority
      />
      <Column>
        <BaseText>{item.name}</BaseText>
        <BaseText>{item.closeAt} 운영 종료</BaseText>
        <BaseText>무용, 댄스</BaseText>
        <BaseText>
          {item.location} {item.address}
        </BaseText>
      </Column>
    </Item>
  )
}

const Item = styled(ShadowCard)`
  flex-direction: row;
  gap: 20px;
  padding: 30px;
  background-color: ${(p) => p.theme.color.white};
`

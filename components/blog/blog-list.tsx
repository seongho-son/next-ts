import React from 'react'
import styled from 'styled-components'
import { useBlog } from 'api/hook'
import { Column } from 'styles/components/layout'
import { BlogItem } from 'components/blog/blog-item'
import { Button } from 'components/common/button'
import { getFetch } from 'api/fetcher'
import { KeyedMutator } from 'swr'
import { Blog } from 'infra/type'

const more = async (mutate: KeyedMutator<Blog[]>) => {
  try {
    await mutate(getFetch('/blogs?limit=20'), {
      rollbackOnError: true,
      populateCache: true,
      revalidate: false,
    })
  } catch (e) {
    alert(e)
  }
}

export const BlogList: React.FC = () => {
  const { data, mutate } = useBlog({ limit: 10 })
  if (!data) return null
  return (
    <Column style={{ gap: 20 }}>
      <List>
        {data.map((item) => (
          <BlogItem key={item.id} item={item} />
        ))}
      </List>
      <Button onClick={() => more(mutate)}>More</Button>
    </Column>
  )
}

export const List = styled(Column)`
  gap: 20px;
`

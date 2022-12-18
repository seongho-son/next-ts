import React from 'react'
import { Column, Row } from 'styles/components/common/layout'
import { BlogItem } from 'components/home/blog-item'
import { useBlogs } from 'api/hook'
import { Blog } from 'infra/type'

export const BlogList: React.FC = () => {
  const { data } = useBlogs()
  if (!data) return null
  const list: Blog[][] = [[], [], []]
  let count = 0
  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    if (count === 3) count = 0
    list[count].push(item)
    count++
  }
  return (
    <Row style={{ justifyContent: 'space-between' }}>
      {list.map((data, index) => (
        <Column key={index} style={{ gap: 40 }}>
          {data.map((item) => (
            <BlogItem key={item.id} item={item} />
          ))}
        </Column>
      ))}
    </Row>
  )
}

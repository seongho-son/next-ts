import React from 'react'
import { Column, Row } from 'styles/components/common/layout'
import { BlogItem } from 'components/home/blog-item'
import { useBlogs } from 'api/hook'

export const BlogList: React.FC = () => {
  const { data } = useBlogs()
  return (
    <Row style={{ justifyContent: 'space-between' }}>
      <Column style={{ gap: 40 }}>
        {data?.map((item) => (
          <BlogItem
            key={item.id}
            id={item.id}
            title={item.name}
            subject={item.subject}
            createdAt={item.createdAt}
          />
        ))}
        {/* <BlogItem
          imageUrl='/image/item-14.jpeg'
          createdAt='2022-01-01'
          title='오늘의 일기'
          subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
        />
        <BlogItem
          imageUrl='/image/item-13.jpeg'
          createdAt='2022-01-01'
          title='오늘의 일기'
          subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
        />
        <BlogItem
          imageUrl='/image/item-2.jpeg'
          createdAt='2022-01-01'
          title='오늘의 일기'
          subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
        />
        <BlogItem
          createdAt='2022-01-01'
          title='오늘의 일기'
          subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
        />
      </Column>
      <Column style={{ gap: 40 }}>
        <BlogItem
          createdAt='2022-01-01'
          title='오늘의 일기'
          subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
        />
        <BlogItem
          imageUrl='/image/item-3.jpeg'
          createdAt='2022-01-01'
          title='오늘의 일기'
          subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
        />
        <BlogItem
          createdAt='2022-01-01'
          title='오늘의 일기'
          subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
        />
        <BlogItem
          imageUrl='/image/item-4.jpeg'
          createdAt='2022-01-01'
          title='오늘의 일기'
          subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
        />
      </Column>
      <Column style={{ gap: 40 }}>
        <BlogItem
          imageUrl='/image/item-16.jpeg'
          createdAt='2022-01-01'
          title='오늘의 일기'
          subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
        />
        <BlogItem
          imageUrl='/image/item-8.jpeg'
          createdAt='2022-01-01'
          title='오늘의 일기'
          subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
        />
        <BlogItem
          createdAt='2022-01-01'
          title='오늘의 일기'
          subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
        />
        <BlogItem
          imageUrl='/image/item-7.jpeg'
          createdAt='2022-01-01'
          title='오늘의 일기'
          subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
        /> */}
      </Column>
    </Row>
  )
}

import React, { Suspense } from 'react'
import styled from 'styled-components'
import { Seo } from 'components/seo'
import { NextPage } from 'next'
import { Column, Media } from 'styles/components/layout'
import { H4Text } from 'styles/components/text'
import { BlogList } from 'components/blog/blog-list'
import { BlogListSkeleton } from 'components/blog/blog-skeleton'

const Blog: NextPage = () => {
  return (
    <>
      <Seo title='DAN | 아카데미 찾기' description='blog test' />
      <Main>
        <Media>
          <Column style={{ gap: 20 }}>
            <CategoryText>요즘 뜨는 아카데미</CategoryText>
            <Suspense fallback={<BlogListSkeleton />}>
              <BlogList />
            </Suspense>
          </Column>
        </Media>
      </Main>
    </>
  )
}

const Main = styled(Column)`
  height: 100%;
  padding: 60px 0;
  background-color: ${(p) => p.theme.color.background};
`

const CategoryText = styled(H4Text)`
  font-weight: ${(p) => p.theme.weight.bold};
`

export default Blog

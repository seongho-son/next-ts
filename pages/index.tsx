import React, { Suspense } from 'react'
import type { NextPage } from 'next'
import { Column, Media, Row } from 'styles/components/common/layout'
import { MainItem } from 'components/home/main-item'
import { SubItem } from 'components/home/sub-item'
import { theme } from 'styles/theme'
import { Float } from 'components/common/float'
import { Frame } from 'components/common/frame'
import { BlogList } from 'components/home/blog-list'
import { Loading } from 'components/common/loading'

const Home: NextPage = () => {
  return (
    <Frame>
      <Row style={{ justifyContent: 'center' }}>
        <Column>
          <Media>
            <Row>
              <MainItem
                url='/image/item-11.jpeg'
                title={`Flexible Developer`}
                subject={`나의 가치를 발산시킬 수 있는 공간에서\n퍼니하고 해피하게 일하기`}
              />
              <Column>
                <SubItem
                  url='/image/item-8.jpeg'
                  title={`Problem Create`}
                  subject={`문제 현상을 발견하고 창의적으로 발산하고\n근본 문제를 정의하는 것`}
                />
                <SubItem
                  url='/image/item-13.jpeg'
                  title={`Solution Search`}
                  subject={`문제만 정확히 정의했다면 해결은 쉽다`}
                />
              </Column>
            </Row>
          </Media>
        </Column>
      </Row>
      <Column
        style={{
          backgroundColor: theme.color.background,
          padding: '50px 0',
        }}
      >
        <Media>
          <Suspense fallback={<Loading />}>
            <BlogList />
          </Suspense>
        </Media>
      </Column>
      <Float />
    </Frame>
  )
}

export default Home

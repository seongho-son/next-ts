import React from 'react'
import type { NextPage } from 'next'
import { Column, Media, Row } from 'styles/components/layout'
import { MainItem } from 'components/home/main-item'
import { SubItem } from 'components/home/sub-item'
import { HeaderWithFooter } from 'components/common/frame'
import { theme } from 'styles/theme'
import { ListItem } from 'components/home/list-item'

const Home: NextPage = () => {
  return (
    <HeaderWithFooter>
      <Column style={{ gap: 40 }}>
        <Row style={{ justifyContent: 'center' }}>
          <Column style={{ position: 'fixed', top: 140 }}>
            <Media>
              <Row>
                <MainItem
                  url='/image/main-1.jpeg'
                  title={`Flexible Developer`}
                  subject={`나의 가치를 발산시킬 수 있는 공간에서\n퍼니하고 해피하게 일하기`}
                />
                <Column>
                  <SubItem
                    url='/image/sub-1.jpeg'
                    title={`Problem Create`}
                    subject={`문제 현상을 발견하고 창의적으로 발산하고\n근본 문제를 정의하는 것`}
                  />
                  <SubItem
                    url='/image/sub-2.jpeg'
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
            marginTop: 740,
            zIndex: 1,
          }}
        >
          <Media>
            <Row style={{ gap: 8, padding: '20px 0' }}></Row>
            <Row style={{ justifyContent: 'space-between' }}>
              <Column style={{ gap: 40 }}>
                <ListItem imageUrl='/image/main-1.jpeg' />
                <ListItem />
                <ListItem imageUrl='/image/main-1.jpeg' />
                <ListItem />
              </Column>
              <Column style={{ gap: 40 }}>
                <ListItem />
                <ListItem />
                <ListItem imageUrl='/image/main-1.jpeg' />
                <ListItem imageUrl='/image/main-1.jpeg' />
              </Column>
              <Column style={{ gap: 40 }}>
                <ListItem />
                <ListItem imageUrl='/image/main-1.jpeg' />
                <ListItem imageUrl='/image/main-1.jpeg' />
                <ListItem />
                <ListItem imageUrl='/image/main-1.jpeg' />
              </Column>
            </Row>
          </Media>
        </Column>
      </Column>
    </HeaderWithFooter>
  )
}

export default Home

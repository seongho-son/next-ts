import React from 'react'
import type { NextPage } from 'next'
import { Column, Media, Row } from 'styles/components/layout'
import { MainItem } from 'components/home/main-item'
import { SubItem } from 'components/home/sub-item'
import { HeaderWithFooter } from 'components/common/frame'
import { theme } from 'styles/theme'
import ListItem from 'components/home/list-item'

const Home: NextPage = () => {
  return (
    <HeaderWithFooter>
      <Column style={{ gap: 40 }}>
        <Column>
          <Media>
            <Row>
              <MainItem url='/image/main-image.jpeg' />
              <Column>
                <SubItem url='/image/sub-image-1.jpeg' />
                <SubItem url='/image/sub-image-2.jpeg' />
              </Column>
            </Row>
          </Media>
        </Column>
        <Column
          style={{ backgroundColor: theme.color.background, padding: '40px 0' }}
        >
          <Media>
            <Row style={{ justifyContent: 'space-between' }}>
              <Column style={{ gap: 40 }}>
                <ListItem image={true} />
                <ListItem image={false} />
                <ListItem image={true} />
                <ListItem image={true} />
              </Column>
              <Column style={{ gap: 40 }}>
                <ListItem image={false} />
                <ListItem image={false} />
                <ListItem image={true} />
                <ListItem image={true} />
              </Column>
              <Column style={{ gap: 40 }}>
                <ListItem image={true} />
                <ListItem image={false} />
                <ListItem image={true} />
                <ListItem image={false} />
                <ListItem image={true} />
              </Column>
            </Row>
          </Media>
        </Column>
      </Column>
    </HeaderWithFooter>
  )
}

export default Home

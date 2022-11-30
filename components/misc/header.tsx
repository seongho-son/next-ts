import React from 'react'
import { Column, Media, Row } from 'styles/components/common/layout'
import { BaseText, HeaderText } from 'styles/components/common/text'
import { theme } from 'styles/theme'
import { Dropdown } from 'components/common/dropdown'
import Link from 'next/link'

export const Header: React.FC = () => {
  return (
    <Row style={{ justifyContent: 'center' }}>
      <Media>
        <Row style={{ justifyContent: 'space-between', padding: '20px 0' }}>
          <Link href='/'>
            <HeaderText
              fontFamily='L'
              style={{
                color: theme.color.white,
                cursor: 'pointer',
              }}
            >
              Nostalgic.
            </HeaderText>
          </Link>
          <Row style={{ marginBlockStart: 'auto' }}>
            <Dropdown value='Categories' onClick={() => {}}>
              <Column style={{ gap: 20, textAlign: 'end' }}>
                <Column>
                  <BaseText
                    style={{
                      color: theme.color.white,
                      fontWeight: theme.weight.bold,
                    }}
                  >
                    Segment
                  </BaseText>
                  <BaseText style={{ color: theme.color.white }}>
                    option1
                  </BaseText>
                </Column>
                <Column>
                  <BaseText
                    style={{
                      color: theme.color.white,
                      fontWeight: theme.weight.bold,
                    }}
                  >
                    Segment
                  </BaseText>
                  <BaseText style={{ color: theme.color.white }}>
                    option1
                  </BaseText>
                  <BaseText style={{ color: theme.color.white }}>
                    option2
                  </BaseText>
                  <BaseText style={{ color: theme.color.white }}>
                    option3
                  </BaseText>
                </Column>
              </Column>
            </Dropdown>
          </Row>
        </Row>
      </Media>
    </Row>
  )
}

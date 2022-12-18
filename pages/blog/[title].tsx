import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { Column, Media } from 'styles/components/common/layout'
import { theme } from 'styles/theme'
import { BaseText, DescText, HeaderText } from 'styles/components/common/text'
import { Float } from 'components/common/float'
import { Frame } from 'components/common/frame'
import { useBlog } from 'api/hook'
import moment from 'moment'
import { Preview } from 'components/common/editor'
import { contentFormat, titleFormat } from 'utils/format'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query
  return {
    props: { id },
  }
}

const Post: NextPage<{ id: number }> = ({ id }) => {
  const { data } = useBlog(Number(id))
  if (!data) return null
  const title = titleFormat(data.text)
  const content = contentFormat(data.text)

  return (
    <Frame>
      <Column style={{ backgroundColor: theme.color.background }}>
        <Media>
          <Column style={{ alignItems: 'center', gap: 40, padding: '40px 0' }}>
            <Column style={{ alignItems: 'center' }}>
              <HeaderText fontFamily='L'>{title}</HeaderText>
              <BaseText
                style={{
                  color: theme.color.gray3,
                  fontWeight: theme.weight.bold,
                }}
              >
                {moment(data.createdAt).format('M월 D일, YYYY')}
              </BaseText>
            </Column>
            <Column>
              <Preview source={content} />
              <DescText style={{ display: 'none' }}>{data.text}</DescText>
            </Column>
          </Column>
        </Media>
      </Column>
      <Float />
    </Frame>
  )
}

export default Post

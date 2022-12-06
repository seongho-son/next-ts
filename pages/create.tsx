import React from 'react'
import styled from 'styled-components'
import { NextPage } from 'next'
import { HeaderWithFooter } from 'components/common/frame'
import { Column, Media } from 'styles/components/common/layout'
import { Input } from 'styles/components/common/input'
import { H4Text } from 'styles/components/common/text'
import Editor from 'components/common/editor'

const Create: NextPage = () => {
  return (
    <HeaderWithFooter>
      <Media>
        <Column>
          <SectionTitle>Title</SectionTitle>
          <Input style={{ margin: '40px 0' }} />
          <Editor />
        </Column>
      </Media>
    </HeaderWithFooter>
  )
}

const SectionTitle = styled(H4Text)`
  color: ${(p) => p.theme.color.white};
`
export default Create

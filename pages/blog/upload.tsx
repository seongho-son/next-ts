import React, { useState } from 'react'
import { NextPage } from 'next'
import { Column, Media, Row } from 'styles/components/common/layout'
import { Input } from 'styles/components/common/input'
import { Editor } from 'components/common/editor'
import { Frame } from 'components/common/frame'
import { Button } from 'styles/components/common/button'
import { postFetch } from 'api/fetcher'

const Upload: NextPage = () => {
  const [text, setText] = useState('')
  const upload = () => postFetch('/blog', { text })

  return (
    <Frame>
      <Media>
        <Column style={{ gap: 50, paddingBottom: 50 }}>
          <Editor value={text} onChange={(e) => setText(e)} />
          <Row style={{ justifyContent: 'center' }}>
            <Button style={{ width: 300 }} onClick={() => upload()}>
              Upload
            </Button>
          </Row>
        </Column>
      </Media>
    </Frame>
  )
}

export default Upload

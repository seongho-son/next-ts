import React, { useState } from 'react'
import { NextPage } from 'next'
import { Column, Media, Row } from 'styles/components/common/layout'
import { Input } from 'styles/components/common/input'
import { Editor } from 'components/common/editor'
import { Frame } from 'components/common/frame'
import { Button } from 'styles/components/common/button'
import { postFetch } from 'api/fetcher'

const Upload: NextPage = () => {
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')
  const upload = () => postFetch('/blog', { name, subject, content })

  return (
    <Frame>
      <Media>
        <Column style={{ gap: 50 }}>
          <Input
            placeholder='Title'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder='Subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Editor value={content} onChange={(e) => setContent(e)} />
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

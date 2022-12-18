import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import React from 'react'
import styled from 'styled-components'
import _MdEditor from '@uiw/react-md-editor'
import { Column } from 'styles/components/common/layout'

const MdEditor: React.FC<{
  value: string
  onChange: (e: string) => void
}> = ({ value, onChange }) => (
  <Main>
    <_MdEditor
      value={value}
      onChange={(_, e) => onChange(e ? e.target.value : value)}
    />
  </Main>
)

const Main = styled(Column)`
  .w-md-editor {
    height: 100vh !important;
  }
`

export default MdEditor

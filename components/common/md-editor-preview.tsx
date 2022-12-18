import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import React from 'react'
import MdEditor from '@uiw/react-md-editor'
import { theme } from 'styles/theme'

const MdEditorPreview: React.FC<{
  source: string
}> = ({ source }) => (
  <MdEditor.Markdown
    source={source}
    style={{
      backgroundColor: theme.color.background,
      color: theme.color.black1,
    }}
  />
)

export default MdEditorPreview

import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import React from 'react'
import _MdEditor from '@uiw/react-md-editor'

const MdEditor: React.FC<{
  value: string
  onChange: (e: string) => void
}> = ({ value, onChange }) => (
  <_MdEditor
    value={value}
    onChange={(_, e) => onChange(e ? e.target.value : value)}
  />
)

export default MdEditor

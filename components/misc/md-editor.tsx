import React, { useState } from 'react'
import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import Mde from '@uiw/react-md-editor'

const MDEditor: React.FC = () => {
  const [value, setValue] = useState('')
  return <Mde value={value} onChange={(_, e) => setValue(e.target.value)} />
}

export default MDEditor

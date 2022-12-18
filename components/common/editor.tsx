import React from 'react'
import dynamic from 'next/dynamic'

const MdEditor = dynamic(import('./md-editor'), { ssr: false })
const MdEditorPreview = dynamic(import('./md-editor-preview'), { ssr: false })

export const Editor: React.FC<{
  value: string
  onChange: (e: string) => void
}> = ({ value, onChange }) => <MdEditor value={value} onChange={onChange} />

export const Preview: React.FC<{ source: string }> = ({ source }) => (
  <MdEditorPreview source={source} />
)

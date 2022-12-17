import dynamic from 'next/dynamic'

const MdEditor = dynamic(import('./md-editor'), { ssr: false })

export const Editor: React.FC<{
  value: string
  onChange: (e: string) => void
}> = ({ value, onChange }) => <MdEditor value={value} onChange={onChange} />

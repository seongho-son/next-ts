import dynamic from 'next/dynamic'

const MDEditor = dynamic(import('../misc/md-editor'), { ssr: false })

const Editor: React.FC = () => {
  return <MDEditor />
}

export default Editor

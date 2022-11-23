import { Seo } from 'components/seo'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <Seo title='블로그' description='home test' />
      Home
    </div>
  )
}

export default Home

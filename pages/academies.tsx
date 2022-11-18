import React from 'react'
import styled from 'styled-components'
import { Seo } from 'components/seo'
import { NextPage } from 'next'
import { Column, Media } from 'styles/components/layout'
import { H4Text } from 'styles/components/text'
import { AcademiesList } from 'components/academy/academies-list'
import { AcademiesListSkeleton } from 'components/common/skeleton'

const Academies: NextPage = () => {
  return (
    <>
      <Seo title='아카데미 찾기' description='academies test' />
      <AcademiesMain>
        <Media>
          <Column style={{ gap: 20 }}>
            <CategoryText>요즘 뜨는 아카데미</CategoryText>
            <React.Suspense fallback={<AcademiesListSkeleton />}>
              <AcademiesList />
            </React.Suspense>
          </Column>
        </Media>
      </AcademiesMain>
    </>
  )
}

const AcademiesMain = styled(Column)`
  height: 100vh;
  padding-top: 50px;
  background-color: ${(p) => p.theme.color.background};
`

const CategoryText = styled(H4Text)`
  font-weight: ${(p) => p.theme.weight.bold};
`

export default Academies

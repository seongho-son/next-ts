import React, { ReactNode } from 'react'
import { Column } from 'styles/components/common/layout'
import { Header } from 'components/common/header'
import { Loading } from 'components/common/loading'

export const Frame: React.FC<{ children: ReactNode }> = ({ children }) => (
  <>
    {/* <Loading /> */}
    <Column style={{ minHeight: '100vh' }}>
      <Header />
      {children}
    </Column>
  </>
)

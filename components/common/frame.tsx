import React, { ReactNode } from 'react'
import { Column } from 'styles/components/common/layout'
import { Header } from 'components/common/header'

export const Frame: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Column style={{ minHeight: '100vh', paddingBottom: 50 }}>
    <Header />
    {children}
  </Column>
)

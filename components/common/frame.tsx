import React from 'react'
import { Column } from 'styles/components/common/layout'
import { Header } from 'components/misc/header'

interface HeaderWithFooterProps {
  children: React.ReactNode
}

export const HeaderWithFooter: React.FC<HeaderWithFooterProps> = ({
  children,
}) => {
  return (
    <Column>
      <Header />
      {children}
    </Column>
  )
}

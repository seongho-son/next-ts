import React from 'react'
import { Column } from 'styles/components/layout'
import { theme } from 'styles/theme'

interface ListItemProps {
  image: boolean
}

const ListItem: React.FC<ListItemProps> = ({ image }) => {
  return (
    <Column
      style={{
        width: 300,
        height: 'fit-content',
        backgroundColor: theme.color.white1,
        cursor: 'pointer',
      }}
    >
      {image && (
        <Column
          style={{
            height: 250,
            border: `1px solid ${theme.color.background}`,
          }}
        />
      )}
      <Column
        style={{
          height: 250,
          border: `1px solid ${theme.color.background}`,
        }}
      />
    </Column>
  )
}

export default ListItem

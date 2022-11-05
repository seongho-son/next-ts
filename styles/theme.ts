const font = {
  background: 'red',
}

const media = {
  desktop: '@media (min-width: 1080px)',
  mobile: '@media (max-width: 1079px)',
}

export const theme = {
  font,
  media,
}

export type ThemeType = typeof theme

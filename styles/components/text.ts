import styled from 'styled-components'
import { theme } from 'styles/theme'

const common = {
  color: '#24273a',
  'font-size': theme.size.default,
}

enum FontFamilyType {
  P = 'Pretendard Variable',
  L = "'Libre Bodoni', serif",
}

export const BaseText = styled.span<{
  fontFamily?: 'P' | 'L'
}>`
  ${common}
  font-weight: ${(p) => p.theme.weight.regular};
  font-family: ${(p) =>
    p.fontFamily ? FontFamilyType[p.fontFamily] : FontFamilyType.P};
`

export const DescText = styled.p`
  ${common}
  font-weight: ${(p) => p.theme.weight.regular};
  line-height: 1.8;
  white-space: pre-wrap;
`

export const HeaderText = styled(BaseText)`
  font-size: ${(p) => p.theme.size.header};
`

export const H1Text = styled(BaseText)`
  font-size: ${(p) => p.theme.size.h1};
`

export const H2Text = styled(BaseText)`
  font-size: ${(p) => p.theme.size.h2};
`

export const H3Text = styled(BaseText)`
  font-size: ${(p) => p.theme.size.h3};
`

export const H4Text = styled(BaseText)`
  font-size: ${(p) => p.theme.size.h4};
`

export const H5Text = styled(BaseText)`
  font-size: ${(p) => p.theme.size.h5};
`

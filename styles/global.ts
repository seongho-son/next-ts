import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body{
    height: 100%;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif; 
    color: ${(p) => p.theme.color.black}
    ${(p) => p.theme.media.desktop}{}
    ${(p) => p.theme.media.mobile}{}
  }
`

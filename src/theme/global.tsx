import { GlobalStyles } from '@chakra-ui/theme-tools'
import { Poppins } from 'next/font/google'
import { Global } from '@emotion/react'

export const fontLoad = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})
export const fontName = fontLoad.style.fontFamily

export const global: GlobalStyles = {
  global: {
    html: {
      w: 'full',
      h: 'full',
    },
    body: {
      w: 'full',
      h: 'full',
      bg: '#f6faff',
      ...fontLoad.style,
    },
    '.Typewriter': {
      display: 'contents',
    },
  },
}

export const FocusVisibleProvider = () => (
  <Global
    styles={`
        *:focus {
            box-shadow: none !important;
        }
    
        *[data-focus] {
            box-shadow: none !important;
        }
    `}
  />
)

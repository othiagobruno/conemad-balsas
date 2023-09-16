import { global } from './global'
import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'
import { buttonStyle } from './components/button'
import { inputTheme } from './components/input'

export const MaxWidth = '1200px'

export const themeApp = extendTheme({
  styles: global,
  colors,
  shadows: {
    sm: '0 2px 5px #40404012',
  },
  components: {
    Button: buttonStyle,
    Input: inputTheme,
    Select: inputTheme,
  },
  breakpoints: {
    sm: '40em',
    md: '70em',
    lg: '80em',
    xl: '90em',
    '2xl': '96em',
  },
})

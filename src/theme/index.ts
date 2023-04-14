import { global } from './global'
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { colors } from './colors'
import { buttonStyle } from './components/button'

export const MaxWidth = '1200px'

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '70em',
  lg: '80em',
  xl: '90em',
  '2xl': '96em',
})

export const themeApp = extendTheme({
  styles: global,
  colors,
  shadows: {
    sm: '0 2px 5px #40404012',
  },
  components: {
    Button: buttonStyle,
  },
  breakpoints,
})

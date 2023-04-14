import { ComponentStyleConfig } from '@chakra-ui/react'

export const buttonStyle: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: '500',
    borderRadius: 'base',
    outline: 0,
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      h: '40px',
    },
    md: {
      fontSize: 'sm',
      px: 10,
      h: '44px',
    },
  },
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'primary.500',
      color: 'primary.500',
      _hover: {
        color: 'primary.500',
        bg: 'primary.200',
      },
      _active: {
        color: 'primary.700',
      },
    },

    solid: {
      border: 0,
      bg: 'primary.500',
      color: 'white',
      borderRadius: '100px',
      fontWeight: '700',
      _hover: {
        bg: 'primary.600',
      },
      _active: {
        bg: 'primary.700',
      },
    },

    text: {
      color: 'text.primary',
      fontWeight: '700',
      _hover: {
        color: 'primary.600',
      },
      _active: {
        color: 'primary.700',
      },
    },

    link: {
      color: 'primary.500',
      _hover: {
        color: 'primary.500',
        textDecoration: 'none',
      },
      _active: {
        color: 'primary.500',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
}

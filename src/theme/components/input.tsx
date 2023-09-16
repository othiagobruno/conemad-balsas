import { ComponentStyleConfig } from '@chakra-ui/react'

export const inputTheme: ComponentStyleConfig = {
  parts: ['field'],
  baseStyle: {
    field: {
      outline: 0,
      boxShadow: 0,
      border: 'none',
    },
  },
  sizes: {
    sm: {
      field: {
        borderRadius: 5,
        fontSize: 'sm',
        px: 6,
        h: '40px',
      },
    },
    md: {
      field: {
        fontSize: 'sm',
        px: 5,
        h: '45px',
      },
    },
  },
  variants: {
    unstyled: {
      field: {
        bg: 'transparent',
        _focus: {
          boxShadow: 0,
        },
        _active: {
          boxShadow: 0,
        },
      },
    },
    outline: {
      field: {
        borderWidth: 2,
        borderColor: '#ddd',
        _focus: {
          borderColor: 'primary.500',
          boxShadow: 0,
        },
        _active: {
          borderWidth: 2,
          boxShadow: 0,
          borderColor: 'primary.500',
        },
        _disabled: {
          bg: '#f5f5f5',
          opacity: 0.6,
          cursor: 'default',
        },
        _hover: {
          borderWidth: 2,
          borderColor: '#ddd',
        },
        _invalid: {
          borderColor: 'red.500',
          borderWidth: 1.4,
        },
      },
      addon: {
        borderColor: 'primary.500',
        boxShadow: 0,
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
}

import { defineRecipe } from '@chakra-ui/react'

export const buttonRecipe = defineRecipe({
  base: {
    display: 'flex',
  },
  variants: {
    intent: {
      primary: {
        bg: 'blue.500',
        color: 'white',
        _hover: { bg: 'blue.600' },
        _active: { bg: 'blue.700' },
      },
    },
    visual: {
      solid: { color: 'blue.500', bg: 'blue.400' },
      outline: { borderWidth: '1px', borderColor: 'red.200' },
    },
    size: {
      sm: { padding: '4', fontSize: '12px' },
      lg: { padding: '8', fontSize: '24px' },
    },
    isLoading: {
      true: {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
  },
  defaultVariants: {
    intent: 'primary',
    isLoading: false,
  },
})

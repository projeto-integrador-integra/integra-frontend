// theme/components/button.ts
import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import { buttonRecipe } from './components/button.recipe'

export const customConfig = defineConfig({
  theme: {
    recipes: {
      button: buttonRecipe,
    },
    tokens: {
      colors: {
        primary: { value: '#0FEE0F' },
        secondary: { value: '#EE0F0F' },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)

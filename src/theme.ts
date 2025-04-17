// theme/components/button.ts
import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import { buttonRecipe } from './components/button.recipe'

export const customConfig = defineConfig({
  theme: {
    recipes: {
      button: buttonRecipe,
    },
    tokens: {
      fonts: {
        heading: { value: 'Urbanist, sans-serif' },
        body: { value: 'Inter, sans-serif' },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)

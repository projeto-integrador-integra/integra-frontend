// theme/components/button.ts
import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

export const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'Urbanist, sans-serif' },
        body: { value: 'Inter, sans-serif' },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)

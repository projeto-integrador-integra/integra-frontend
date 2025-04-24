import { system } from '@/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { render, RenderOptions } from '@testing-library/react'
import { HeadProvider } from 'react-head'
import { MemoryRouter, MemoryRouterProps } from 'react-router'

interface CustomRenderOptions extends RenderOptions {
  routerProps?: MemoryRouterProps
}

export function renderWithRouter(
  ui: React.ReactElement,
  { routerProps, ...renderOptions }: CustomRenderOptions = {}
) {
  return render(ui, {
    wrapper: ({ children }) => (
      <HeadProvider>
        <ChakraProvider value={system}>
          <MemoryRouter {...routerProps}>{children}</MemoryRouter>
        </ChakraProvider>
      </HeadProvider>
    ),
    ...renderOptions,
  })
}

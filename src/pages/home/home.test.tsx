import { renderWithRouter } from '@/test/MemoryRouter'
import { Home } from './home'

describe('Home', () => {
  it('should render the home page', () => {
    const { getByText } = renderWithRouter(<Home />)
    expect(getByText('Integra')).toBeInTheDocument()
  })
})

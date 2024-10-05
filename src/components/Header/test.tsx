import { render, screen } from '@testing-library/react'
import { Header } from '.'

describe('Header', () => {
  it('should render the heading', () => {
    // Renderiza o componente
    const { container } = render(<Header />)
    // Verifica se o heading está sendo renderizado
    expect(
      screen.getByRole('heading', { name: /header title/i })
    ).toBeInTheDocument()

    // ScreenShot
    expect(container.firstChild).toMatchSnapshot()
  })
})

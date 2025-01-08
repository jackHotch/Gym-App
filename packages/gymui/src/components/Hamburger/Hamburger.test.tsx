import { fireEvent, render } from '@testing-library/react'
import { Hamburger } from './Hamburger'

describe('Hamburger', () => {
  it('Hamburger should render successfully', () => {
    const hamClick = jest.fn()
    const { baseElement, getByTestId } = render(
      <Hamburger active={true} onClick={hamClick} />
    )
    fireEvent.click(getByTestId('hamburger'))

    expect(baseElement).toBeTruthy()
    expect(hamClick).toHaveBeenCalled()
  })
})

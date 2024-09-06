import { fireEvent, render } from '@testing-library/react'
import { CloseIcon } from './CloseIcon'

describe('CloseIcon', () => {
  it('CloseIcon should render successfully', () => {
    const closeIconClick = jest.fn()
    const { baseElement, getByTestId } = render(<CloseIcon onClick={closeIconClick} />)
    fireEvent.click(getByTestId('closeIcon'))

    expect(baseElement).toBeTruthy()
    expect(closeIconClick).toHaveBeenCalled()
  })
})

import { fireEvent, render } from '@testing-library/react'
import { Error } from './Error'

describe('Error', () => {
  it('Error should render successfully', () => {
    const messageClick = jest.fn()
    const { baseElement, getByText } = render(
      <Error onClick={messageClick} isVisible={true}>
        Error Message
      </Error>
    )
    fireEvent.click(getByText('Error Message'))

    expect(baseElement).toBeTruthy()
    expect(messageClick).toHaveBeenCalled()
  })
})

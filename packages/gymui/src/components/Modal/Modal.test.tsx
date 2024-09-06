import { fireEvent, render } from '@testing-library/react'
import { Modal } from './Modal'

describe('Modal', () => {
  it('Modal.FullPage should render successfully', () => {
    const modalBackgroundClick = jest.fn()
    const { baseElement, getByTestId } = render(
      <Modal.FullPage onOutsideClick={modalBackgroundClick}>
        <p>FullPage Modal</p>
      </Modal.FullPage>
    )
    fireEvent.click(getByTestId('background'))

    expect(baseElement).toBeTruthy()
    expect(modalBackgroundClick).toHaveBeenCalled()
  })
})

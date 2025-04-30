import { fireEvent, render } from '@testing-library/react'
import { Modal } from './Modal'

describe('Modal', () => {
  it('Modal.Overlay should render successfully', () => {
    const modalBackgroundClick = jest.fn()
    const { baseElement, getByTestId } = render(
      <Modal.Overlay onOutsideClick={modalBackgroundClick}>
        <p>FullPage Modal</p>
      </Modal.Overlay>
    )
    fireEvent.click(getByTestId('background'))

    expect(baseElement).toBeTruthy()
    expect(modalBackgroundClick).toHaveBeenCalled()
  })

  it('Modal.Popover should render successfully', () => {
    const { baseElement } = render(
      <Modal.Popover>
        <p>Popover Modal</p>
      </Modal.Popover>
    )

    expect(baseElement).toBeTruthy()
  })

  it('Modal.Item should render successfully', () => {
    const itemClick = jest.fn()
    const { baseElement, getByText } = render(
      <Modal.Popover>
        <Modal.Item onClick={itemClick}>Item</Modal.Item>
      </Modal.Popover>
    )
    fireEvent.click(getByText('Item'))

    expect(baseElement).toBeTruthy()
    expect(itemClick).toHaveBeenCalled()
  })
})

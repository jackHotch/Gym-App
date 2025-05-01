import { fireEvent, render } from '@testing-library/react'
import { Popover } from './popover'

describe('Modal', () => {
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

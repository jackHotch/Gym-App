import { fireEvent, render } from '@testing-library/react'
import { Modal } from './modal'

describe('Modal', () => {
  it('Modal Trigger should render successfully', () => {
    const triggerClick = jest.fn()
    const { baseElement, getByText, queryByText } = render(
      <Modal open={false} onOpenChange={triggerClick}>
        <Modal.Trigger>
          <button>Modal Trigger</button>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>This is the title</Modal.Title>
            <Modal.Description>This is the description of the card</Modal.Description>
          </Modal.Header>
          <p>This is the content</p>
          <Modal.Footer>
            <button>Close</button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    )

    expect(baseElement).toBeTruthy()
    expect(getByText('Modal Trigger')).toBeTruthy()
    expect(queryByText('This is the title')).toBeFalsy()

    fireEvent.click(getByText('Modal Trigger'))
    expect(triggerClick).toHaveBeenCalled()
  })

  it('Modal Content should render successfully', () => {
    const { baseElement, getByText } = render(
      <Modal open={true} onOpenChange={jest.fn()}>
        <Modal.Trigger>
          <button>Modal Trigger</button>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>This is the title</Modal.Title>
            <Modal.Description>This is the description of the card</Modal.Description>
          </Modal.Header>
          <p>This is the content</p>
          <Modal.Footer>
            <button>Close</button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    )

    expect(baseElement).toBeTruthy()
    expect(getByText('This is the title')).toBeTruthy()
  })
})

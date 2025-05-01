import { render } from '@testing-library/react'
import { Modal } from './modal'

describe('Card', () => {
  it('Card should render with every section', () => {
    const { getByText } = render(
      <Modal open={false} onOpenChange={jest.fn()}>
        <Modal.Trigger>
          <button>Open Modal</button>
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

    expect(getByText('This is the title')).toBeFalsy()
    expect(getByText('This is the description')).toBeFalsy()
    expect(getByText('This is the content')).toBeFalsy()
  })
})

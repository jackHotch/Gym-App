import { render } from '@testing-library/react'
import { Overlay } from './overlay'

describe('Card', () => {
  it('Card should render with every section', () => {
    const { getByText } = render(
      <Overlay open={false} onOpenChange={jest.fn()}>
        <Overlay.Trigger>
          <button>Open Overlay</button>
        </Overlay.Trigger>
        <Overlay.Content>
          <Overlay.Header>
            <Overlay.Title>This is the title</Overlay.Title>
            <Overlay.Description>This is the description of the card</Overlay.Description>
          </Overlay.Header>
          <p>This is the content</p>
          <Overlay.Footer>
            <button>Close</button>
          </Overlay.Footer>
        </Overlay.Content>
      </Overlay>
    )

    expect(getByText('This is the title')).toBeFalsy()
    expect(getByText('This is the description')).toBeFalsy()
    expect(getByText('This is the content')).toBeFalsy()
  })
})

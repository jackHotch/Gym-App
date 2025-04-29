import { render } from '@testing-library/react'
import { Card } from './card'

describe('Card', () => {
  it('Card should render with every section', () => {
    const { getByText } = render(
      <Card>
        <Card.Header>
          <Card.Title>This is the title</Card.Title>
          <Card.Description>This is the description</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>This is the content</p>
        </Card.Content>
        <Card.Footer>
          <p>This is the footer</p>
        </Card.Footer>
      </Card>
    )

    expect(getByText('This is the title')).toBeTruthy()
    expect(getByText('This is the description')).toBeTruthy()
    expect(getByText('This is the content')).toBeTruthy()
    expect(getByText('This is the footer')).toBeTruthy()
  })
})

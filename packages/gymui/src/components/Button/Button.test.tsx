import { render } from '@testing-library/react'

import { Button } from './Button'

describe('Button', () => {
  it('Button.Body should render successfully', () => {
    const { baseElement } = render(<Button.Body>hello</Button.Body>)
    expect(baseElement).toBeTruthy()
  })
})

import { render } from '@testing-library/react'

import { Button } from './Button'

describe('Button', () => {
  it('Button.Header should render successfully', () => {
    const { baseElement } = render(<Button.Header>hello</Button.Header>)
    expect(baseElement).toBeTruthy()
  })
})

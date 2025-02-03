import { render } from '@testing-library/react'
import { Form } from '../Form'

describe('Form.Text', () => {
  it('Form.Text.Outline should render successfully', () => {
    const { baseElement } = render(<Form.Text.Outline />)
    expect(baseElement).toBeTruthy()
  })

  it('Form.Text.Filled should render successfully', () => {
    const { baseElement } = render(<Form.Text.Filled />)
    expect(baseElement).toBeTruthy()
  })

  it('Form.Text.Password should render successfully', () => {
    const { baseElement } = render(<Form.Text.Password />)
    expect(baseElement).toBeTruthy()
  })
})

import { fireEvent, render } from '@testing-library/react'
import { Button } from './button'

describe('Button', () => {
  it('Primary Button should render successfully', () => {
    const buttonClick = jest.fn()
    const { baseElement, getByText } = render(
      <Button onClick={buttonClick}>Primary</Button>
    )
    fireEvent.click(getByText('Primary'))

    expect(baseElement).toBeTruthy()
    expect(buttonClick).toHaveBeenCalled()
  })

  it('Secondary Button should render successfully', () => {
    const buttonClick = jest.fn()
    const { baseElement, getByText } = render(
      <Button variant='secondary' onClick={buttonClick}>
        Secondary
      </Button>
    )
    fireEvent.click(getByText('Secondary'))

    expect(baseElement).toBeTruthy()
    expect(buttonClick).toHaveBeenCalled()
  })

  it('Danger Button should render successfully', () => {
    const buttonClick = jest.fn()
    const { baseElement, getByText } = render(
      <Button variant='danger' onClick={buttonClick}>
        Danger
      </Button>
    )
    fireEvent.click(getByText('Danger'))

    expect(baseElement).toBeTruthy()
    expect(buttonClick).toHaveBeenCalled()
  })

  it('Disabled Button should render successfully', () => {
    const buttonClick = jest.fn()
    const { baseElement, getByText } = render(
      <Button variant='disabled' onClick={buttonClick}>
        Disabled
      </Button>
    )
    fireEvent.click(getByText('Disabled'))

    expect(baseElement).toBeTruthy()
    expect(buttonClick).not.toHaveBeenCalled()
  })

  it('Text Button should render successfully', () => {
    const buttonClick = jest.fn()
    const { baseElement, getByText } = render(
      <Button variant='text' onClick={buttonClick}>
        Text
      </Button>
    )
    fireEvent.click(getByText('Text'))

    expect(baseElement).toBeTruthy()
    expect(buttonClick).toHaveBeenCalled()
  })

  it('Loading Button should render successfully', () => {
    const buttonClick = jest.fn()
    const { baseElement, getByText } = render(
      <Button variant='loading' onClick={buttonClick} />
    )
    fireEvent.click(getByText('Please Wait'))

    expect(baseElement).toBeTruthy()
    expect(buttonClick).not.toHaveBeenCalled()
  })
})

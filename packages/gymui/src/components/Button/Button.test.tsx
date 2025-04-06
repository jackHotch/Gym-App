import { fireEvent, render } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('Button.Primary should render successfully', () => {
    const buttonClick = jest.fn()
    const { baseElement, getByText } = render(
      <Button.Primary onClick={buttonClick}>Primary</Button.Primary>
    )
    fireEvent.click(getByText('Primary'))

    expect(baseElement).toBeTruthy()
    expect(buttonClick).toHaveBeenCalled()
  })

  it('Button.Secondary should render successfully', () => {
    const buttonClick = jest.fn()
    const { baseElement, getByText } = render(
      <Button.Secondary onClick={buttonClick}>Secondary</Button.Secondary>
    )
    fireEvent.click(getByText('Secondary'))

    expect(baseElement).toBeTruthy()
    expect(buttonClick).toHaveBeenCalled()
  })

  it('Button.Danger should render successfully', () => {
    const buttonClick = jest.fn()
    const { baseElement, getByText } = render(
      <Button.Danger onClick={buttonClick}>Danger</Button.Danger>
    )
    fireEvent.click(getByText('Danger'))

    expect(baseElement).toBeTruthy()
    expect(buttonClick).toHaveBeenCalled()
  })

  it('Button.Disabled should render successfully', () => {
    const buttonClick = jest.fn()
    const { baseElement, getByText } = render(
      <Button.Disabled onClick={buttonClick}>Disabled</Button.Disabled>
    )
    fireEvent.click(getByText('Disabled'))

    expect(baseElement).toBeTruthy()
    expect(buttonClick).not.toHaveBeenCalled()
  })

  it('Button.Text should render successfully', () => {
    const buttonClick = jest.fn()
    const { baseElement, getByText } = render(
      <Button.Text onClick={buttonClick}>Text</Button.Text>
    )
    fireEvent.click(getByText('Text'))

    expect(baseElement).toBeTruthy()
    expect(buttonClick).toHaveBeenCalled()
  })

  it('Button.Loading should render successfully', () => {
    const buttonClick = jest.fn()
    const { baseElement, getByText } = render(<Button.Loading onClick={buttonClick} />)
    fireEvent.click(getByText('Please Wait'))

    expect(baseElement).toBeTruthy()
    expect(buttonClick).not.toHaveBeenCalled()
  })
})

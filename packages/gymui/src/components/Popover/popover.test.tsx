import { fireEvent, render } from '@testing-library/react'
import { Popover } from './popover'

describe('Popover', () => {
  it('Popover Trigger should render successfully', () => {
    const triggerClick = jest.fn()
    const { baseElement, getByText, queryByText } = render(
      <Popover open={false} onOpenChange={triggerClick}>
        <Popover.Trigger>
          <button>Popover Trigger</button>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Item>Actions</Popover.Item>
          <Popover.Item>Copy Payment ID</Popover.Item>
          <Popover.Item>View Account</Popover.Item>
          <Popover.Item variant='danger'>Delete Account</Popover.Item>
        </Popover.Content>
      </Popover>
    )

    expect(baseElement).toBeTruthy()
    expect(getByText('Popover Trigger')).toBeTruthy()
    expect(queryByText('Actions')).toBeFalsy()

    fireEvent.click(getByText('Popover Trigger'))
    expect(triggerClick).toHaveBeenCalled()
  })

  it('Popover Content should render successfully', () => {
    const itemClick = jest.fn()
    const { baseElement, getByText } = render(
      <Popover open={true} onOpenChange={jest.fn()}>
        <Popover.Trigger>
          <button>Popover Trigger</button>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Item onClick={itemClick}>Actions</Popover.Item>
          <Popover.Item onClick={itemClick}>Copy Payment ID</Popover.Item>
          <Popover.Item onClick={itemClick}>View Account</Popover.Item>
          <Popover.Item onClick={itemClick} variant='danger'>
            Delete Account
          </Popover.Item>
        </Popover.Content>
      </Popover>
    )

    expect(baseElement).toBeTruthy()
    expect(getByText('Actions')).toBeTruthy()

    fireEvent.click(getByText('Actions'))
    expect(itemClick).toHaveBeenCalled()
  })
})

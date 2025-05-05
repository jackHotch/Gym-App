import { Meta, StoryObj } from '@storybook/react'
import { Popover } from './popover'
import { ComponentProps, useRef, useState } from 'react'
import { Button } from '../Button/Button'
import { fn } from '@storybook/test'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useOutsideClick } from './popover-context'

type StoryProps = ComponentProps<typeof Popover>

const meta: Meta<StoryProps> = {
  component: Popover,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {
    onClick: fn(),
  },
  render: (args: any) => {
    const [open, setOpen] = useState(false)

    return (
      <div style={{ display: 'flex' }}>
        <p>Click the dots to open the popover</p>
        <Popover open={open} onOpenChange={setOpen} {...args}>
          <Popover.Trigger>
            <MoreVertIcon />
          </Popover.Trigger>
          <Popover.Content>
            <Popover.Item onClick={args.onClick}>Actions</Popover.Item>
            <Popover.Item onClick={args.onClick}>Copy Payment ID</Popover.Item>
            <Popover.Item onClick={args.onClick}>View Account</Popover.Item>
            <Popover.Item onClick={args.onClick} variant='danger'>
              Delete Account
            </Popover.Item>
          </Popover.Content>
        </Popover>
      </div>
    )
  },
}

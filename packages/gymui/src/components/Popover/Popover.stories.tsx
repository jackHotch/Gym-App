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
            <Popover.Item onClick={args.onClick}>First line</Popover.Item>
            <Popover.Item onClick={args.onClick}>Next line</Popover.Item>
            <Popover.Item onClick={args.onClick}>One Option</Popover.Item>
            <Popover.Item onClick={args.onClick} sx={{ color: 'crimson' }}>
              Danger
            </Popover.Item>
          </Popover.Content>
        </Popover>
      </div>
    )
  },
}

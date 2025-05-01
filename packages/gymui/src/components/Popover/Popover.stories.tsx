import { Meta, StoryObj } from '@storybook/react'
import { Popover } from './popover'
import { ComponentProps } from 'react'
import { fn } from '@storybook/test'
import { AnimatePresence } from 'motion/react'

type StoryProps = ComponentProps<typeof Popover>

const meta: Meta<StoryProps> = {
  component: Popover,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {},
  render: (args: any) => {
    return (
      <>
        <AnimatePresence>
          <Popover {...args}>
            <Popover.Item onClick={args.onClick}>First line</Popover.Item>
            <Popover.Item onClick={args.onClick}>Next line</Popover.Item>
            <Popover.Item onClick={args.onClick}>One Option</Popover.Item>
            <Popover.Item onClick={args.onClick} sx={{ color: 'crimson' }}>
              Danger
            </Popover.Item>
          </Popover>
        </AnimatePresence>
      </>
    )
  },
}

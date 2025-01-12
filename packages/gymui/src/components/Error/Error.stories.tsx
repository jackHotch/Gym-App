import { Meta, StoryObj } from '@storybook/react'
import { Error } from './Error'
import { ComponentProps } from 'react'
import { AnimatePresence } from 'motion/react'

type StoryProps = ComponentProps<typeof Error>

const meta: Meta<StoryProps> = {
  component: Error,
  tags: ['autodocs'],
  args: {
    visible: true,
  },
}

export default meta

type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {
    children: 'Error Message',
  },
  render: (args: any) => {
    return (
      <div>
        <AnimatePresence>{args.visible && <Error {...args} />}</AnimatePresence>
      </div>
    )
  },
}

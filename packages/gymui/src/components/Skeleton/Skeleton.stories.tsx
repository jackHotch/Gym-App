import { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'
import { ComponentProps } from 'react'

type StoryProps = ComponentProps<typeof Skeleton>

const meta: Meta<StoryProps> = {
  component: Skeleton,
  tags: ['autodocs'],
  args: {
    width: '600px',
    height: '24px',
    sx: {},
  },
}

export default meta

type Story = StoryObj<StoryProps>

export const Block: Story = {
  args: {
    count: 10,
  },
  render: (args) => {
    return <Skeleton.Block {...args} />
  },
}

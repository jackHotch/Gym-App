import { Meta, StoryObj } from '@storybook/react'
import { CloseIcon } from './CloseIcon'
import { ComponentProps } from 'react'
import { fn } from '@storybook/test'

type StoryProps = ComponentProps<typeof CloseIcon>

const meta: Meta<StoryProps> = {
  component: CloseIcon,
  tags: ['autodocs'],
  args: {
    sx: {},
    onClick: fn(),
  },
}

export default meta

type Story = StoryObj<StoryProps>

export const X: Story = {
  args: {},
  render: (args) => {
    return <CloseIcon {...args} />
  },
}

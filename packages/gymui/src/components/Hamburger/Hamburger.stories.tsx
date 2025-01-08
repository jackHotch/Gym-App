import { Meta, StoryObj } from '@storybook/react'
import { Hamburger } from './Hamburger'
import { ComponentProps } from 'react'
import { fn } from '@storybook/test'

type StoryProps = ComponentProps<typeof Hamburger>

const meta: Meta<StoryProps> = {
  component: Hamburger,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {
    active: false,
    onClick: fn(),
  },
  render: (args) => {
    return <Hamburger {...args} />
  },
}

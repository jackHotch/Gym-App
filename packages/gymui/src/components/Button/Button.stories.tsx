import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { ComponentProps } from 'react'
import { fn } from '@storybook/test'

type StoryProps = ComponentProps<typeof Button>

const meta: Meta<StoryProps> = {
  component: Button,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
}

export default meta

type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {
    sx: {},
    children: 'Primary',
  },
  render: (args) => {
    return <Button.Primary {...args} />
  },
}

export const Secondary: Story = {
  args: {
    sx: {},
    children: 'Secondary',
  },
  render: (args) => {
    return <Button.Secondary {...args} />
  },
}

export const Danger: Story = {
  args: {
    sx: {},
    children: 'Danger',
  },
  render: (args) => {
    return <Button.Danger {...args} />
  },
}

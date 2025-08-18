import { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { ComponentProps } from 'react'
import { fn } from '@storybook/test'

type StoryProps = ComponentProps<typeof Button>

const meta: Meta<StoryProps> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['default', 'secondary', 'danger', 'text', 'loading', 'disabled'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'default', 'lg', 'xl'],
    },
  },
  args: {
    size: 'default',
    variant: 'default',
    children: 'Button',
    onClick: fn(),
  },
}

export default meta

type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {},
  render: (args: any) => {
    return <Button {...args} />
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: (args: any) => {
    return <Button {...args} />
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
  render: (args: any) => {
    return <Button {...args} />
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
  },
  render: (args: any) => {
    return <Button {...args} />
  },
}

export const Loading: Story = {
  args: {
    variant: 'loading',
  },
  render: (args: any) => {
    return <Button {...args} />
  },
}

export const Disabled: Story = {
  args: {
    variant: 'disabled',
  },
  render: (args: any) => {
    return <Button {...args} />
  },
}

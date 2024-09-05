import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { ComponentProps } from 'react'
import { fn } from '@storybook/test'

type StoryProps = ComponentProps<typeof Button>

const meta: Meta<StoryProps> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
  },
  args: {
    sx: {},
    size: 'small',
    onClick: fn(),
  },
}

export default meta

type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {
    children: 'Primary',
  },
  render: (args) => {
    return <Button.Primary {...args} />
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
  },
  render: (args) => {
    return <Button.Secondary {...args} />
  },
}

export const Danger: Story = {
  args: {
    children: 'Danger',
  },
  render: (args) => {
    return <Button.Danger {...args} />
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled',
  },
  render: (args) => {
    return <Button.Disabled {...args} />
  },
}

export const Text: Story = {
  args: {
    children: 'Text',
  },
  render: (args) => {
    return <Button.Text {...args} />
  },
}

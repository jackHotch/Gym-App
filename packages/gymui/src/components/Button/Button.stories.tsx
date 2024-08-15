import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Button from './Button'
import { ComponentProps } from 'react'
import React from 'react'

type StoryProps = ComponentProps<typeof Button>

const meta: Meta<StoryProps> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['primary', 'danger'],
    },
  },
  args: {
    onClick: fn(),
  },
}

export default meta

type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'hello',
  },
  render: (args) => {
    return <Button {...args} />
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'test',
  },
  render: (args) => {
    return <Button {...args} />
  },
}

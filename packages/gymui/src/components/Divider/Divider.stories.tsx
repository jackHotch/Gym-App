import { ComponentProps } from 'react'
import Divider from './Divider'
import { Meta, StoryObj } from '@storybook/react/*'
import { fn } from '@storybook/test'
import React from 'react'

type StoryProps = ComponentProps<typeof Divider>

const meta: Meta<StoryProps> = {
  component: Divider,
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
    return <Divider {...args} />
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'test',
  },
  render: (args) => {
    return <Divider {...args} />
  },
}

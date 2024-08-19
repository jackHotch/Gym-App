import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { ComponentProps } from 'react'

type StoryProps = ComponentProps<typeof Button>

const meta: Meta<StoryProps> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
}

export default meta

type Story = StoryObj<StoryProps>

export const Body: Story = {
  render: () => {
    return <Button.Body>body</Button.Body>
  },
}

export const Header: Story = {
  render: () => {
    return <Button.Header>head</Button.Header>
  },
}

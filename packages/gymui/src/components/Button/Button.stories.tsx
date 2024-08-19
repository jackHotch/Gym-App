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

export const Body: Story = {
  render: () => {
    return <Button.Body>body</Button.Body>
  },
}

export const Header: Story = {
  args: {
    children: 'test',
  },
  render: (args: any) => {
    return <Button.Header {...args} />
  },
}

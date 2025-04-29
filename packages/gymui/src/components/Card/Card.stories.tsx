import { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { ComponentProps } from 'react'

type StoryProps = ComponentProps<typeof Card>

const meta: Meta<StoryProps> = {
  component: Card,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {
    children: 'Primary',
  },
  render: (args: any) => {
    return <Card {...args} />
  },
}

import { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { ComponentProps } from 'react'
import { fn } from '@storybook/test'

type StoryProps = ComponentProps<typeof Sidebar>

const meta: Meta<StoryProps> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {},
  render: (args) => {
    return <Sidebar {...args} />
  },
}

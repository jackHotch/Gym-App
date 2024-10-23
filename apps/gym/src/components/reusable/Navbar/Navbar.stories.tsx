import { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'
import { ComponentProps } from 'react'
import { fn } from '@storybook/test'

type StoryProps = ComponentProps<typeof Navbar>

const meta: Meta<StoryProps> = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {},
  render: (args) => {
    return <Navbar {...args} />
  },
}

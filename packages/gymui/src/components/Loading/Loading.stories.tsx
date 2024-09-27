import { Meta, StoryObj } from '@storybook/react'
import { Loading } from './Loading'
import { ComponentProps } from 'react'

type StoryProps = ComponentProps<typeof Loading>

const meta: Meta<StoryProps> = {
  component: Loading,
  tags: ['autodocs'],
  args: {
    children: '',
    sx: {},
  },
}

export default meta

type Story = StoryObj<StoryProps>

export const Text: Story = {
  args: {
    children: 'This is text',
  },
  render: (args) => {
    return <Loading.Text {...args} />
  },
}

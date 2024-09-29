import { Meta, StoryObj } from '@storybook/react'
import { Loading } from './Loading'
import { ComponentProps } from 'react'

type StoryProps = ComponentProps<typeof Loading>

const meta: Meta<StoryProps> = {
  component: Loading,
  tags: ['autodocs'],
  args: {
    children: '',
    pulseSize: 7,
    fontSize: '18px',
    sx: {
      padding: '20px',
    },
  },
}

export default meta

type Story = StoryObj<StoryProps>

export const Text: Story = {
  args: {
    children: 'Loading',
  },
  render: (args) => {
    return <Loading.Text {...args} />
  },
}

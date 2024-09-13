import { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from './DatePicker'
import { ComponentProps } from 'react'
import { fn } from '@storybook/test'

type StoryProps = ComponentProps<typeof DatePicker>

const meta: Meta<StoryProps> = {
  component: DatePicker,
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
    size: 'small',
    sx: {
      margin: '16px',
    },
    onClick: fn(),
  },
}

export default meta

type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {},
  render: (args) => {
    return <DatePicker {...args} />
  },
}

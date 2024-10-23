import { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from './DatePicker'
import { ComponentProps } from 'react'
import { fn } from '@storybook/test'
import dayjs from 'dayjs'

type StoryProps = ComponentProps<typeof DatePicker>

const meta: Meta<StoryProps> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<StoryProps>

let d = dayjs()
const setDate = (n: any) => (d = n)

export const Primary: Story = {
  args: {
    value: d,
    setDate: setDate,
  },
  render: (args) => {
    return <DatePicker {...args} />
  },
}

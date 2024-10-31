import { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from './DatePicker'
import { ComponentProps } from 'react'
import dayjs from 'dayjs'

type StoryProps = ComponentProps<typeof DatePicker>

const meta: Meta<StoryProps> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<StoryProps>

let date = dayjs()
const setDate = (n: any) => (date = n)

export const Primary: Story = {
  args: {
    openCalendar: true,
    value: date,
    onChange: setDate,
  },
  render: (args) => {
    return (
      <div style={{ width: 'max-content', marginLeft: '100px' }}>
        <DatePicker {...args} />
      </div>
    )
  },
}

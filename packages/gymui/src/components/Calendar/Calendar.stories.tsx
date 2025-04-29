import { Meta, StoryObj } from '@storybook/react'
import { Calendar } from './Calendar'
import { ComponentProps } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { fn } from '@storybook/test'

type StoryProps = ComponentProps<typeof Calendar>

const meta: Meta<StoryProps> = {
  component: Calendar,
  tags: ['autodocs'],
  args: {
    sx: {
      margin: '20px',
    },
  },
}

export default meta

type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {},
  render: (args: any) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Calendar {...args} />
      </LocalizationProvider>
    )
  },
}

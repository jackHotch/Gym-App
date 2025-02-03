import { Meta, StoryObj } from '@storybook/react'
import { Form } from './Form'
import { ComponentProps } from 'react'

type StoryProps = ComponentProps<typeof Form>

const meta: Meta<StoryProps> = {
  component: Form,
}

export default meta

type Story = StoryObj<StoryProps>

export const EntireForm: Story = {
  render: () => {
    return (
      <Form sx={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '250px' }}>
        <Form.Text.Outline placeholder='Outline' />
        <Form.Text.Filled placeholder='Filled' />
        <Form.Text.Password placeholder='Password' />
      </Form>
    )
  },
}

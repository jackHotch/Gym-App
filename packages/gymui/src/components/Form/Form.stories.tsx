import { Meta, StoryObj } from '@storybook/react'
import { Form } from './Form'
import { ComponentProps } from 'react'

type StoryProps = ComponentProps<typeof Form>

const meta: Meta<StoryProps> = {
  component: Form,
}

export default meta

type Story = StoryObj<StoryProps>

// SHOW AN ENTIRE FORM EXAMPLE AFTER ALL COMPONENTS ARE BUILT

export const EntireForm: Story = {
  render: () => {
    return (
      <Form>
        <Form.Text.Outline />
      </Form>
    )
  },
}

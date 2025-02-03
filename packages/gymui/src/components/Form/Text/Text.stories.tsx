import { Meta, StoryObj } from '@storybook/react'
import { Form } from '../Form'
import { ComponentProps } from 'react'

type StoryProps = ComponentProps<typeof Form.Text>

const meta: Meta<StoryProps> = {
  component: Form.Text,
  tags: ['autodocs'],
  args: {
    sx: {
      margin: '32px',
    },
    placeholder: 'Placeholder',
  },
}

export default meta

type Story = StoryObj<StoryProps>

export const Outline: Story = {
  args: {},
  render: (args: any) => {
    return <Form.Text.Outline {...args} />
  },
}

export const Filled: Story = {
  args: {},
  render: (args: any) => {
    return <Form.Text.Filled {...args} />
  },
}

export const Password: Story = {
  args: {},
  render: (args: any) => {
    return <Form.Text.Password {...args} />
  },
}

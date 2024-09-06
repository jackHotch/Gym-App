import { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { ComponentProps } from 'react'
import { fn } from '@storybook/test'

type StoryProps = ComponentProps<typeof Modal>

const meta: Meta<StoryProps> = {
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: {
        type: 'text',
      },
    },
    height: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    width: '400px',
    height: '400px',
    sx: {},
    onOutsideClick: fn(),
  },
}

export default meta

type Story = StoryObj<StoryProps>

export const FullPage: Story = {
  args: {},
  render: (args) => {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>This is the Text Behind the Modal</h1>
        <Modal.FullPage {...args}>
          <h2>This is a Full Page Modal</h2>
          <p>This is Text</p>
        </Modal.FullPage>
      </div>
    )
  },
}

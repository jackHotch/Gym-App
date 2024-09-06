import { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { ComponentProps } from 'react'
import { fn } from '@storybook/test'

type StoryProps = ComponentProps<typeof Modal>

const meta: Meta<StoryProps> = {
  component: Modal,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<StoryProps>

export const FullPage: Story = {
  render: () => {
    return (
      <div>
        this text is behind the modal
        <Modal.FullPage></Modal.FullPage>
      </div>
    )
  },
}

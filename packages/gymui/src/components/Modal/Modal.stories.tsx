import { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { ComponentProps } from 'react'
import { fn } from '@storybook/test'
import { AnimatePresence } from 'motion/react'

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
    visible: true,
    sx: {},
  },
}

export default meta

type Story = StoryObj<StoryProps>

export const Overlay: Story = {
  args: {},
  render: (args: any) => {
    return (
      <Overlay {...args}>
        <Overlay.Trigger>
          <button>show modal</button>
        </Overlay.Trigger>
        <Overlay.Content>this is the modal</Overlay.Content>
      </Overlay>
    )
  },
}

export const Popover: Story = {
  args: {
    onClick: fn(),
  },
  render: (args: any) => {
    return (
      <>
        <AnimatePresence>
          {args.visible && (
            <Modal.Popover {...args}>
              <Modal.Item onClick={args.onClick}>First line</Modal.Item>
              <Modal.Item onClick={args.onClick}>Next line</Modal.Item>
              <Modal.Item onClick={args.onClick}>One Option</Modal.Item>
              <Modal.Item onClick={args.onClick} sx={{ color: 'crimson' }}>
                Danger
              </Modal.Item>
            </Modal.Popover>
          )}
        </AnimatePresence>
      </>
    )
  },
}

import { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { ComponentProps } from 'react'
import { fn } from '@storybook/test'
import { AnimatePresence } from 'framer-motion'

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

export const FullPage: Story = {
  args: {
    width: '400px',
    height: '400px',
    onOutsideClick: fn(),
  },
  render: (args: any) => {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>This is the Text Behind the Modal</h1>
        <AnimatePresence>
          {args.visible && (
            <Modal.FullPage {...args}>
              <h2>This is a Full Page Modal</h2>
              <p>This is Text</p>
            </Modal.FullPage>
          )}
        </AnimatePresence>
      </div>
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

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

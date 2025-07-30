import { Meta, StoryObj } from '@storybook/react'
import { Modal } from './modal'
import { ComponentProps } from 'react'
import { useState } from 'react'
import { Button } from '../Button/Button'
import { Form } from '../Form/Form'

type StoryProps = ComponentProps<typeof Modal>

const meta: Meta<StoryProps> = {
  component: Modal,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {},
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Modal open={open} onOpenChange={setOpen}>
        <Modal.Trigger>
          <Button>Open Modal</Button>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>This is the title</Modal.Title>
            <Modal.Description>This is the description of the card</Modal.Description>
          </Modal.Header>
          <div style={{ width: '100%' }}>
            <label style={{ display: 'block' }}>Label #1 </label>
            <Form.Text.Outline sx={{ width: 'calc(100% - 16px)' }} />
            <br />
            <label style={{ display: 'block', marginTop: '16px' }}>Label #2 </label>
            <Form.Text.Outline sx={{ width: 'calc(100% - 16px)' }} />
          </div>
          <Modal.Footer>
            <Button variant='danger' onClick={() => setOpen(false)}>
              Close
            </Button>
            <Button onClick={() => setOpen(false)}>Submit</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    )
  },
}

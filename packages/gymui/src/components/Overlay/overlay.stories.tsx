import { Meta, StoryObj } from '@storybook/react'
import { Overlay } from './overlay'
import { ComponentProps } from 'react'
import { useState } from 'react'
import { Button } from '../Button/Button'
import { Form } from '../Form/Form'

type StoryProps = ComponentProps<typeof Overlay>

const meta: Meta<StoryProps> = {
  component: Overlay,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {},
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Overlay open={open} onOpenChange={setOpen}>
        <Overlay.Trigger>
          <Button.Primary>Open Overlay</Button.Primary>
        </Overlay.Trigger>
        <Overlay.Content>
          <Overlay.Header>
            <Overlay.Title>This is the title</Overlay.Title>
            <Overlay.Description>This is the description of the card</Overlay.Description>
          </Overlay.Header>
          <div style={{ width: '100%' }}>
            <label style={{ display: 'block' }}>Label #1 </label>
            <Form.Text.Outline sx={{ width: 'calc(100% - 16px)' }} />
            <br />
            <label style={{ display: 'block', marginTop: '16px' }}>Label #2 </label>
            <Form.Text.Outline sx={{ width: 'calc(100% - 16px)' }} />
          </div>
          <Overlay.Footer>
            <Button.Danger onClick={() => setOpen(false)}>Close</Button.Danger>
            <Button.Primary onClick={() => setOpen(false)}>Submit</Button.Primary>
          </Overlay.Footer>
        </Overlay.Content>
      </Overlay>
    )
  },
}

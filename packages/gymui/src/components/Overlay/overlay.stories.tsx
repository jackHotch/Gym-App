import { Meta, StoryObj } from '@storybook/react'
import { Overlay } from './overlay'
import { ComponentProps } from 'react'
import { useState } from 'react'

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
          <button>Open Overlay</button>
        </Overlay.Trigger>
        <Overlay.Content>
          <p>This is a Overlay in Storybook.</p>
          <button onClick={() => setOpen(false)}>Close</button>
        </Overlay.Content>
      </Overlay>
    )
  },
}

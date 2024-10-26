import { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { ComponentProps } from 'react'

type StoryProps = ComponentProps<typeof Dropdown>

const meta: Meta<StoryProps> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {},
  render: (args) => {
    return (
      <Dropdown {...args}>
        <Dropdown.Button>Button</Dropdown.Button>
        <Dropdown.Content>content</Dropdown.Content>
      </Dropdown>
    )
  },
}

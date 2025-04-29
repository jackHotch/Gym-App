import { Meta, StoryObj } from '@storybook/react'
import { Card } from './card'
import { ComponentProps } from 'react'
import { Button } from '../Button/Button'
import { Form } from '../Form/Form'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'

type StoryProps = ComponentProps<typeof Card>

const meta: Meta<StoryProps> = {
  component: Card,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<StoryProps>

export const Everything: Story = {
  args: {},
  render: (args: any) => {
    return (
      <Card {...args}>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
          <Card.Description>This is the description of the card</Card.Description>
        </Card.Header>
        <Card.Content>
          <label style={{ display: 'block' }}>Label #1 </label>
          <Form.Text.Outline sx={{ width: 'calc(100% - 16px)' }} />
          <br />
          <label style={{ display: 'block', marginTop: '16px' }}>Label #2 </label>
          <Form.Text.Outline sx={{ width: 'calc(100% - 16px)' }} />
        </Card.Content>
        <Card.Footer>
          <Button.Danger>Cancel</Button.Danger>
          <Button.Primary>Submit</Button.Primary>
        </Card.Footer>
      </Card>
    )
  },
}

export const WithoutFooter: Story = {
  args: {},
  render: (args: any) => {
    return (
      <Card {...args}>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
          <Card.Description>This is the description of the card</Card.Description>
        </Card.Header>
        <Card.Content>
          <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Gained Weight!
            <TrendingUpIcon />
          </div>
        </Card.Content>
      </Card>
    )
  },
}

export const WithoutHeader: Story = {
  args: {
    sx: {
      minWidth: 'unset',
      width: 'max-content',
    },
  },
  render: (args: any) => {
    return (
      <Card {...args}>
        <Card.Content>
          <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Gained Weight!
            <TrendingUpIcon />
          </div>
        </Card.Content>
        <Card.Footer>
          <Button.Primary>Update</Button.Primary>
        </Card.Footer>
      </Card>
    )
  },
}

export const WithoutHeaderOrFooter: Story = {
  args: {
    sx: {
      minWidth: 'unset',
      width: 'max-content',
    },
  },
  render: (args: any) => {
    return (
      <Card {...args}>
        <Card.Content>
          <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Gained Weight!
            <TrendingUpIcon />
          </div>
        </Card.Content>
      </Card>
    )
  },
}

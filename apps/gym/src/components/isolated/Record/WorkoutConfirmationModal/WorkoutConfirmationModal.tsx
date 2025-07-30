'use client'

import { WorkoutConfirmationModalProps } from '@/types'
import styles from './WorkoutConfirmationModal.module.css'
import { Button } from '@gymapp/gymui/Button'
import { Modal } from '@gymapp/gymui/Modal'

export const WorkoutConfirmationModal = ({
  open,
  setOpen,
  handleSubmit,
}: WorkoutConfirmationModalProps) => {
  return (
    <Modal open={open} onOpenChange={setOpen}>
      <Modal.Trigger>
        <Button type='button'>Finish Workout</Button>
      </Modal.Trigger>
      <Modal.Content sx={{ width: '500px' }}>
        <Modal.Header>
          <Modal.Title>Are you sure you want to finish your workout?</Modal.Title>
          <Modal.Description>You can always edit your workout later</Modal.Description>
        </Modal.Header>

        <Modal.Footer>
          <Button variant='danger' type='button' onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={(e) => handleSubmit(e)}>Finish Workout</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}

'use client'

import { WorkoutConfirmationModalProps } from '@/types'
import styles from './WorkoutConfirmationModal.module.css'
import { Button } from '@gymapp/gymui/Button'
import { Modal } from '@gymapp/gymui/Modal'
import { useWindowDimensions } from '@/hooks'

export const WorkoutConfirmationModal = ({
  closeModal,
  handleSubmit,
}: WorkoutConfirmationModalProps) => {
  const screen = useWindowDimensions()
  const buttonWidth = screen.width < 480 ? '100%' : '220px'

  return (
    <Modal.FullPage
      width='470px'
      height='200px'
      onOutsideClick={closeModal}
      sx={{ padding: '20px', justifyContent: 'space-between', textAlign: 'center' }}
    >
      <h2>Are You Sure You Want to Finish Your Workout?</h2>
      <div className={styles.buttons}>
        <Button.Danger size='medium' onClick={closeModal} sx={{ width: buttonWidth }}>
          Cancel
        </Button.Danger>
        <Button.Primary
          size='medium'
          onClick={(e) => handleSubmit(e)}
          sx={{ width: buttonWidth }}
        >
          Finish Workout
        </Button.Primary>
      </div>
    </Modal.FullPage>
  )
}

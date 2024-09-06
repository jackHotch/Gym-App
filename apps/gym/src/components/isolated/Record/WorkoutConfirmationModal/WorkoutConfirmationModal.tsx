'use client'

import { WorkoutConfirmationModalProps } from '@/app/record/record'
import styles from './WorkoutConfirmationModal.module.css'
import { Button } from '@gymapp/gymui/Button'
import { Modal } from '@gymapp/gymui/Modal'

export const WorkoutConfirmationModal = ({
  closeModal,
  handleSubmit,
}: WorkoutConfirmationModalProps) => {
  return (
    <Modal.FullPage
      width='380px'
      height='180px'
      onOutsideClick={closeModal}
      sx={{ padding: '20px', justifyContent: 'space-between', textAlign: 'center' }}
    >
      <h2>Are You Sure You Want to Finish Your Workout?</h2>
      <div className={styles.buttons}>
        <Button.Danger
          size='medium'
          onClick={closeModal}
          sx={{ marginRight: '15px', width: '175px' }}
        >
          Cancel
        </Button.Danger>
        <Button.Primary
          size='medium'
          onClick={(e) => handleSubmit(e)}
          sx={{ marginLeft: '15px', width: '175px' }}
        >
          Finish Workout
        </Button.Primary>
      </div>
    </Modal.FullPage>
  )
}

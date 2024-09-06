'use client'

import { WorkoutConfirmationModalProps } from '@/app/record/record'
import styles from './WorkoutConfirmationModal.module.css'
import { Modal } from '@gymapp/gymui/Modal'

export const WorkoutConfirmationModal = ({
  closeModal,
  handleSubmit,
}: WorkoutConfirmationModalProps) => {
  return (
    <Modal.FullPage
      width='360px'
      height='260px'
      onOutsideClick={closeModal}
      sx={{ padding: '20px', justifyContent: 'space-between', textAlign: 'center' }}
    >
      <h2>Are You Sure You Want to Finish Your Workout?</h2>
      <div className={styles.buttons}>
        <button onClick={(e) => handleSubmit(e)}>Finish Workout</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </Modal.FullPage>
  )
}

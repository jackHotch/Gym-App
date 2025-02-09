'use client'

import { useState } from 'react'
import { CreateNewExerciseModalProps } from '@/types'
import styles from './CreateNewExerciseModal.module.css'
import { FormEvent, TextInputChangeEvent } from '@/types'
import { useCreateExercise } from '@/hooks'
import { Button } from '@gymapp/gymui/Button'
import { Modal } from '@gymapp/gymui/Modal'
import { CloseIcon } from '@gymapp/gymui/CloseIcon'
import { Form } from '@gymapp/gymui/Form'

export const CreateNewExerciseModal = ({ closeModal }: CreateNewExerciseModalProps) => {
  const [name, setName] = useState('')
  const { mutate: createExercise } = useCreateExercise()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    createExercise(name)
    closeModal()
  }

  function handleChange(e: TextInputChangeEvent) {
    setName(e.target.value)
  }

  return (
    <Modal.FullPage
      width='280px'
      height='280px'
      onOutsideClick={closeModal}
      sx={{ padding: '10px' }}
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.new_exercise_modal}>
          <div className={styles.xbtn}>
            <CloseIcon onClick={closeModal} />
          </div>
          <div className={styles.new_exercise_form}>
            <h3 className={styles.title}>Create New Exercise</h3>

            <Form.Text.Outline
              placeholder='Exercise Name'
              value={name}
              onChange={(e) => handleChange(e)}
            />

            <Button.Primary type='submit'>Create</Button.Primary>
          </div>
        </div>
      </form>
    </Modal.FullPage>
  )
}

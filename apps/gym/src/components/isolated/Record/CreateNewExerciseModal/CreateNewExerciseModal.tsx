'use client'

import { useState } from 'react'
import { CreateNewExerciseModalProps } from '@/types'
import styles from './CreateNewExerciseModal.module.css'
import { TextInputChangeEvent } from '@/types'
import { useCreateExercise } from '@/hooks'
import { Button } from '@gymapp/gymui/Button'
import { Modal } from '@gymapp/gymui/Modal'
import { Form } from '@gymapp/gymui/Form'

export const CreateNewExerciseModal = ({
  open,
  setOpen,
}: CreateNewExerciseModalProps) => {
  const [name, setName] = useState('')
  const { mutate: createExercise } = useCreateExercise()

  function handleSubmit() {
    createExercise(name)
    setOpen(false)
  }

  function handleChange(e: TextInputChangeEvent) {
    setName(e.target.value)
  }

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <Modal.Trigger>
        <Button variant='text' type='button' sx={{ fontSize: '16px' }}>
          Create New Exercise
        </Button>
      </Modal.Trigger>
      <Modal.Content sx={{ height: '280px', justifyContent: 'space-between' }}>
        <Modal.Header>
          <Modal.Title>Create Exercise</Modal.Title>
        </Modal.Header>
        <div>
          <label className={styles.label}>New Exercise Name</label>
          <Form.Text.Outline
            placeholder='ex: Bicep Curls'
            value={name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <Modal.Footer>
          <Button type='button' onClick={handleSubmit}>
            Create
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}

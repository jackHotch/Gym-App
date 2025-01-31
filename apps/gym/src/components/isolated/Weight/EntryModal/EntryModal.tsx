'use client'

import styles from './EntryModal.module.css'
import { EntryModalProps } from '@/types'
import { useOutsideClick } from '@/hooks'
import { useRef } from 'react'
import { Modal } from '@gymapp/gymui/Modal'

export const EntryModal = ({ closeModal, deleteEntry }: EntryModalProps) => {
  const entryModalRef = useRef()
  useOutsideClick(entryModalRef, closeModal)

  return (
    <Modal.Popover
      ref={entryModalRef}
      sx={{ position: 'absolute', top: '-20px', right: '10px', zIndex: '10' }}
    >
      <Modal.Item onClick={deleteEntry} sx={{ color: 'var(--red)' }}>
        Delete Entry
      </Modal.Item>
    </Modal.Popover>
  )
}

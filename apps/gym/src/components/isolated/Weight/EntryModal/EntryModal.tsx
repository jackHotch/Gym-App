'use client'

import styles from './EntryModal.module.css'
import { EntryModalProps } from '@/app/weight/Weight.ts'
import { motion } from 'framer-motion'
import { useOutsideClick } from '@/hooks'
import { useRef } from 'react'

export const EntryModal = ({ closeModal, deleteEntry }: EntryModalProps) => {
  const entryModalRef = useRef()
  useOutsideClick(entryModalRef, closeModal)

  return (
    <motion.div
      ref={entryModalRef}
      className={styles.modal_container}
      whileHover={{
        scale: 1.03,
      }}
    >
      <div className={styles.delete_entry} onClick={deleteEntry}>
        Delete Entry
      </div>
    </motion.div>
  )
}

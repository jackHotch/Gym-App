'use client'

import styles from './EntryModal.module.css'
import { EntryModalProps } from '@/app/weight/Weight.ts'
import { motion } from 'framer-motion'
import { useDeleteWeight } from '@/hooks'

export const EntryModal = ({ id, closeModal }: EntryModalProps) => {
  const { mutate: deleteWeight } = useDeleteWeight()

  const deleteEntry = () => {
    deleteWeight(id)
    closeModal(id)
  }

  return (
    <motion.div
      className={styles.modal_container}
      onClick={deleteEntry}
      whileHover={{
        scale: 1.03,
      }}
    >
      <div className={styles.delete_entry}>Delete Entry</div>
    </motion.div>
  )
}

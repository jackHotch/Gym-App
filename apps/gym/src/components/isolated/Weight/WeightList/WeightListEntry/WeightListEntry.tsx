import styles from './WeightListEntry.module.css'
import { WeightListEntryProps } from '@/types'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { EntryModal } from '../../EntryModal'
import { useToggle } from '@/hooks'
import { useDeleteWeight } from '@/hooks'
import { AnimatePresence } from 'motion/react'

export const WeightListEntry = ({ value, id, difference }: WeightListEntryProps) => {
  const [isVisible, toggle, _, close] = useToggle()
  const { mutate: deleteWeight } = useDeleteWeight()

  const deleteEntry = () => {
    deleteWeight(value.weight_id)
    close()
  }

  return (
    <>
      <div className={styles.entry}>
        <div className={styles.id_weight}>
          <span className={styles.id}>#{id}</span>
          <span>{value.weight} lbs</span>
        </div>
        <div className={styles.date_dots}>
          <span
            style={{
              color: difference > 0 ? 'var(--success) ' : 'var(--danger)',
            }}
          >
            {difference}
          </span>
          <span className={styles.date}>{value.date}</span>
          <MoreVertIcon className={styles.three_dots} onClick={toggle} />
        </div>
      </div>
      <div className={styles.entry_modal}>
        <AnimatePresence>
          {isVisible && <EntryModal closeModal={close} deleteEntry={deleteEntry} />}
        </AnimatePresence>
      </div>
    </>
  )
}

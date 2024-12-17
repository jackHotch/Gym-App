import styles from './WeightListEntry.module.css'
import { WeightListEntryProps } from '@/types'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { EntryModal } from '../../EntryModal'
import { useToggle } from '@/hooks'
import { useDeleteWeight } from '@/hooks'
import { AnimatePresence } from 'framer-motion'

export const WeightListEntry = ({ value, id }: WeightListEntryProps) => {
  const [isVisible, toggle, _, close] = useToggle()
  const { mutate: deleteWeight } = useDeleteWeight()

  const deleteEntry = () => {
    deleteWeight(value.id)
    close()
  }

  return (
    <div className={styles.entry}>
      <span className={styles.id}>#{id}</span>
      <span className={styles.weight}>{value.weight} lbs</span>
      <span className={styles.date}>{value.date}</span>
      <MoreVertIcon id={styles.three_dots} onClick={toggle} />
      <div className={styles.entry_modal}>
        <AnimatePresence>
          {isVisible && <EntryModal closeModal={close} deleteEntry={deleteEntry} />}
        </AnimatePresence>
      </div>
    </div>
  )
}

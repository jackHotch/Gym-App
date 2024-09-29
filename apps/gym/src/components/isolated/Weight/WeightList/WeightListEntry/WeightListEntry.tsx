import styles from './WeightListEntry.module.css'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { EntryModal } from '../../EntryModal'
import { useToggle } from '@/hooks'

export const WeightListEntry = ({ value, id }) => {
  const [isVisible, toggle, _, close] = useToggle()
  return (
    <div className={styles.entry}>
      <span className={styles.number}>#{id}</span>
      <span className={styles.weight}>{value.weight} lbs</span>
      <span className={styles.date}>{value.date}</span>
      <span>
        <MoreVertIcon id={styles.three_dots} onClick={toggle} />
      </span>
      <div className={styles.entry_modal}>
        {isVisible && <EntryModal id={value.id} closeModal={close} />}
      </div>
    </div>
  )
}

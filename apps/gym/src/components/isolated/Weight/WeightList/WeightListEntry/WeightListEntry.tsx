import styles from './WeightListEntry.module.css'
import { WeightListEntryProps } from '@/types'
import { EntryPopover } from '../../EntryPopover'
import { useToggle } from '@/hooks'
import { useDeleteWeight } from '@/hooks'

export const WeightListEntry = ({ value, id, difference }: WeightListEntryProps) => {
  const [showEntryPopover, setShowEntryPopover] = useToggle()
  const { mutate: deleteWeight } = useDeleteWeight()

  const deleteEntry = () => {
    deleteWeight(value.weight_id)
    close()
  }

  return (
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
        <EntryPopover
          open={showEntryPopover}
          setOpen={setShowEntryPopover}
          deleteEntry={deleteEntry}
        />
      </div>
    </div>
  )
}

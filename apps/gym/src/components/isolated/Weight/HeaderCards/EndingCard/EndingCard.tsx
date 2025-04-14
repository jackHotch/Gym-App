import styles from '../HeaderCards.module.css'
import { EndingCardProps } from '@/types'
import { TailSpin } from 'react-loader-spinner'

export const EndingCard = ({ weight, isEmpty }: EndingCardProps) => {
  return (
    <div className={styles.container}>
      {weight ? (
        weight
      ) : isEmpty ? (
        '-'
      ) : (
        <TailSpin color='var(--blue)' width='50' height='20' />
      )}
      <span className={styles.label}>End</span>
    </div>
  )
}

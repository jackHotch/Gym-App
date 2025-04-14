import styles from '../HeaderCards.module.css'
import { StartingCardProps } from '@/types'
import { TailSpin } from 'react-loader-spinner'

export const StartingCard = ({ weight, isEmpty }: StartingCardProps) => {
  return (
    <div className={styles.container}>
      {weight ? (
        weight
      ) : isEmpty ? (
        '-'
      ) : (
        <TailSpin color='var(--blue)' width='50' height='20' />
      )}
      <span className={styles.label}>Start</span>
    </div>
  )
}

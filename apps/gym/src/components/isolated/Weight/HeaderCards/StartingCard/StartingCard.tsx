import styles from '../HeaderCards.module.css'
import { StartingCardProps } from '@/types'
import { TailSpin } from 'react-loader-spinner'

export const StartingCard = ({ weight, gainedWeight }: StartingCardProps) => {
  return (
    <div
      className={styles.container}
      style={{
        boxShadow: gainedWeight
          ? 'var(--green) 0px 2px 8px 0px'
          : 'var(--red) 0px 2px 8px 0px;',
      }}
    >
      {weight ? weight : <TailSpin color='var(--blue)' width='50' height='20' />}
      <span className={styles.label}>Start</span>
    </div>
  )
}

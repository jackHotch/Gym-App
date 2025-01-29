import styles from '../HeaderCards.module.css'
import { StartingCardProps } from '@/types'
import { TailSpin } from 'react-loader-spinner'

export const StartingCard = ({ weight, gainedWeight }: StartingCardProps) => {
  return (
    <div
      className={styles.container}
      // style={{
      //   border: gainedWeight ? '1px solid var(--green) ' : '1px solid var(--red)',
      // }}
    >
      {weight ? weight : <TailSpin color='var(--blue)' width='50' height='20' />}
      <span className={styles.label}>Start</span>
    </div>
  )
}

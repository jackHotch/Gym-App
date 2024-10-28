import dayjs from 'dayjs'
import styles from './DateRangePicker.module.css'

export const DateRangePicker = ({ click }) => {
  const handleClick = () => {
    click(dayjs('1/1/2022'), dayjs('8/1/2022'))
  }
  return (
    <div className={styles.container}>
      <h1>DateRangePicker</h1>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

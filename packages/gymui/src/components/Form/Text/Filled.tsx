import styles from './Text.module.css'
import { TextProps } from './Text'

export const Filled = ({ sx, ...props }: TextProps) => {
  return <input type='text' className={styles.filled} style={sx} {...props} />
}

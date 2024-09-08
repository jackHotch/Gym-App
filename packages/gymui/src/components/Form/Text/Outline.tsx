import styles from './Text.module.css'
import { TextProps } from './Text'

export const Outline = ({ sx, ...props }: TextProps) => {
  return <input type='text' className={styles.outline} style={sx} {...props} />
}

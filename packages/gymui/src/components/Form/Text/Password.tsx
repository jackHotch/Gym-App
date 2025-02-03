import styles from './Text.module.css'
import { TextProps } from './Text'

export const Password = ({ sx, ...props }: TextProps) => {
  return <input type='password' className={styles.password} style={sx} {...props} />
}

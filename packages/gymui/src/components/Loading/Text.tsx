import styles from './Loading.module.css'
import { LoadingProps } from './Loading'
import PulseLoader from 'react-spinners/PulseLoader'

export interface TextProps extends LoadingProps {}

export const Text = ({ children, sx }: TextProps) => {
  return (
    <div className={styles.text} style={sx}>
      <PulseLoader />
      {children}
    </div>
  )
}

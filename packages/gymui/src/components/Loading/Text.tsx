import styles from './Loading.module.css'
import { LoadingProps } from './Loading'
import PulseLoader from 'react-spinners/PulseLoader'

export interface TextProps extends LoadingProps {
  pulseSize?: number
  fontSize?: string
}

export const Text = ({ pulseSize = 7, fontSize = '18px', children, sx }: TextProps) => {
  return (
    <div className={styles.text} style={{ fontSize: fontSize, ...sx }}>
      <span>{children}</span>
      <PulseLoader size={pulseSize} />
    </div>
  )
}

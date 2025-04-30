import styles from './overlay.module.css'

export interface TriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[]
  sx?: React.CSSProperties
}

export const Trigger = ({ children, sx, ...props }: TriggerProps) => {
  return (
    <div style={sx} {...props}>
      {children}
    </div>
  )
}

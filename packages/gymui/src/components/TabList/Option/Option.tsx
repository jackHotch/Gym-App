import styles from './Option.module.css'

export interface OptionProps {
  name: string
  href: () => void
}

export const Option = ({ name, href }: OptionProps) => {
  return (
    <div className={styles.container} onClick={href}>
      {name}
    </div>
  )
}

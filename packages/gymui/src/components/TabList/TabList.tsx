import styles from './TabList.module.css'
import { Option, OptionProps } from './Option/Option'

interface TabListProps {
  options: OptionProps[]
}

export const TabList = ({ options }: TabListProps) => {
  return (
    <div className={styles.container}>
      {options.map((option, key) => {
        return <Option key={key} name={option.name} href={option.href} />
      })}
    </div>
  )
}

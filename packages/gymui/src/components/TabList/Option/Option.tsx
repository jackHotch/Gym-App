export interface OptionProps {
  name: string
  href: () => void
}

export const Option = ({ name, href }: OptionProps) => {
  return <div onClick={href}>{name}</div>
}

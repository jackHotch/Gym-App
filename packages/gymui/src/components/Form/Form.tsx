import { CSSProperties } from 'react'
import { Text } from './Text/Text'

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  sx?: CSSProperties
}

export const Form = ({ sx, children, ...props }: FormProps) => (
  <form style={sx} {...props}>
    {children}
  </form>
)

Form.Text = Text

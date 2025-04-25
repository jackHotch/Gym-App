import { ButtonProps } from './Button'
import { Button } from './Button'
import { TailSpin } from 'react-loader-spinner'

export const Loading = ({ size = 'medium', sx, ...props }: ButtonProps) => {
  return (
    <Button.Disabled sx={sx} {...props} size={size}>
      <TailSpin color='white' width='16px' height='16px' /> &nbsp; Please Wait
    </Button.Disabled>
  )
}

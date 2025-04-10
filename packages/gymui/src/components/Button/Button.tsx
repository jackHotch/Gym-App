import { CSSProperties, ReactElement, ReactNode } from 'react'
import { HTMLMotionProps } from 'motion/react'
import { Primary } from './Primary'
import { Secondary } from './Secondary'
import { Danger } from './Danger'
import { Disabled } from './Disabled'
import { Text } from './Text'
import { Loading } from './Loading'

type size = 'small' | 'medium' | 'large'

export interface ButtonProps extends HTMLMotionProps<'button'> {
  children?: ReactNode
  size?: size
  sx?: CSSProperties
}

export const SCALEHOVER = 1.02
export const SCALETAP = 0.95
export const DURATION = 0.15

export const Button = () => <></>

Button.Primary = Primary
Button.Secondary = Secondary
Button.Danger = Danger
Button.Disabled = Disabled
Button.Text = Text
Button.Loading = Loading

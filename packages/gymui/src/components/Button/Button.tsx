import { CSSProperties } from 'react'
import { HTMLMotionProps } from 'framer-motion'
import { Primary } from './Primary'
import { Secondary } from './Secondary'
import { Danger } from './Danger'
import { Disabled } from './Disabled'

export interface ButtonProps extends HTMLMotionProps<'button'> {
  sx?: CSSProperties
  children?: string
  mx?: string
  my?: string
  px?: string
  py?: string
  width?: string
  height?: string
}

export const SCALEHOVER = 1.05
export const SCALETAP = 0.95
export const DURATION = 0.15

export const Button = () => <></>

Button.Primary = Primary
Button.Secondary = Secondary
Button.Danger = Danger
Button.Disabled = Disabled

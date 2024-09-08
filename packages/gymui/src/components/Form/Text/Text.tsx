import { CSSProperties } from 'react'
import { Outline } from './Outline'
import { Filled } from './Filled'

export interface TextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  sx?: CSSProperties
}

export const Text = () => <></>

Text.Outline = Outline
Text.Filled = Filled

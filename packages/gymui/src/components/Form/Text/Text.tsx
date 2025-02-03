import { CSSProperties } from 'react'
import { Outline } from './Outline'
import { Filled } from './Filled'
import { Password } from './Password'

export interface TextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  sx?: CSSProperties
}

export const Text = () => <></>

Text.Outline = Outline
Text.Filled = Filled
Text.Password = Password

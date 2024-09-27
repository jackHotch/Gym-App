import { CSSProperties } from 'react'
import { Text } from './Text'

export interface LoadingProps {
  children?: string
  sx?: CSSProperties
}

export const Loading = () => <></>

Loading.Text = Text

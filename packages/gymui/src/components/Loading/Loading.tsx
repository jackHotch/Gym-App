import { CSSProperties, ReactNode } from 'react'
import { Text } from './Text'

export interface LoadingProps {
  children?: string | ReactNode
  sx?: CSSProperties
}

export const Loading = () => <></>

Loading.Text = Text

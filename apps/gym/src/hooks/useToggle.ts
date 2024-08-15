import { useState } from 'react'
import { useToggleType } from './hooks'

export const useToggle = (initialValue = false): useToggleType => {
  const [state, setState] = useState<boolean>(initialValue)

  const toggle = ()  => { setState(!state) }

  const open = () => { setState(true) }

  const close = () => { setState(false) }

  return [state, toggle, open, close]
}
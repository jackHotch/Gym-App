import { useState } from "react"
import { useArrayToggleType } from "./hooks"

interface useArrayToggleProps {
  initialValue: boolean[]
}

export const useArrayToggle = (initialValue: boolean[] = []): useArrayToggleType => {
  const [state, setState] = useState<boolean[]>(initialValue)

  const toggle = (i: number)  => { 
    const temp = [...state]
    temp[i] = !temp[i]
    setState(temp)
  }

  const open = (i: number) => { 
    const temp = [...state]
    temp[i] = true
    setState(temp)
  }

  const close = (i: number) => { 
    const temp = [...state]
    temp[i] = false
    setState(temp)
  }

  return [state, toggle, open, close]
}
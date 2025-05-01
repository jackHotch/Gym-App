import { createContext, useContext } from 'react'

type ModalContextType = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const ModalContext = createContext<ModalContextType | null>(null)

export function useModalContext() {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('Dialog components must be used inside <Dialog>')
  return ctx
}

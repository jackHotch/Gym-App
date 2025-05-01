import { createContext, useContext } from 'react'

type OverlayContextType = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const OverlayContext = createContext<OverlayContextType | null>(null)

export function useOverlayContext() {
  const ctx = useContext(OverlayContext)
  if (!ctx) throw new Error('Dialog components must be used inside <Dialog>')
  return ctx
}

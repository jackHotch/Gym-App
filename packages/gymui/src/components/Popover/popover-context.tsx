import { createContext, useContext } from 'react'
import { RefObject, useEffect } from 'react'

type PopoverContextType = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const PopoverContext = createContext<PopoverContextType | null>(null)

export function usePopoverContext() {
  const ctx = useContext(PopoverContext)
  if (!ctx) throw new Error('Popover components must be used inside <Popover>')
  return ctx
}

export const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (ref.current && !ref.current.contains(target)) {
        callback()
      }
    }

    document.addEventListener('click', listener)
    return () => {
      document.removeEventListener('click', listener)
    }
  }, [ref, callback])

  return ref
}

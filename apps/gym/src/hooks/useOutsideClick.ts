import { RefObject, useEffect, useRef } from 'react'

export const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const listener = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback()
      }
    }

    document.addEventListener('click', listener)
    return () => {
      document.removeEventListener('click', listener)
    }
  })

  return ref
}

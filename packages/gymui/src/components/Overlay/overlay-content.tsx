import { useOverlayContext } from './overlay-context'

export interface ContentProps {
  children: React.ReactNode
  sx?: React.CSSProperties
}

export function Content({ children }: ContentProps) {
  const { open } = useOverlayContext()

  if (!open) return null

  return <div>{children}</div>
}

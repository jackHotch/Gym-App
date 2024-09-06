import { CSSProperties } from 'react'
import CloseIconMUI from '@mui/icons-material/Close'
import { motion } from 'framer-motion'

interface CloseIconProps {
  sx?: CSSProperties
  onClick?: () => void
}

export const CloseIcon = ({ sx, onClick }: CloseIconProps) => {
  const CloseButton = motion(CloseIconMUI)

  return (
    <CloseButton
      data-testid='closeIcon'
      onClick={onClick}
      style={{ cursor: 'pointer', ...sx }}
      whileHover={{ rotate: 180 }}
      whileTap={{ scale: 0.7 }}
    />
  )
}

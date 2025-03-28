import { CSSProperties } from 'react'
import CloseIconMUI from '@mui/icons-material/Close'
import { motion } from 'motion/react'

interface CloseIconProps {
  sx?: CSSProperties
  onClick?: () => void
}

export const CloseIcon = ({ sx, onClick }: CloseIconProps) => {
  const CloseButton = motion.create(CloseIconMUI)
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

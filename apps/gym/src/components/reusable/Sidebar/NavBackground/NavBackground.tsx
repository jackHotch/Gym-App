import { motion } from 'motion/react'

export const NavBackground = () => {
  return (
    <motion.div
      className='
        bg-light-gray h-full w-full absolute top-0 left-0 -z-1 rounded-lg
      '
      transition={{
        layout: {
          duration: 0.5,
          type: 'spring',
          bounce: 0.3,
        },
      }}
      layoutId='Nav-Background'
    />
  )
}

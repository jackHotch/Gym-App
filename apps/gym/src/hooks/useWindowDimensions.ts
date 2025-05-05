import { useState, useEffect } from 'react'

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      // Set initial dimensions
      handleResize()

      // Add event listener
      window.addEventListener('resize', handleResize)

      // Cleanup event listener on unmount
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowDimensions
}

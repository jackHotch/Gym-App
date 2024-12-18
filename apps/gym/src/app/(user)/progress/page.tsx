'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'

const Progress = () => {
  const count = useRef(0)
  const [items, setItems] = useState([0])

  function removeItem<T>(arr: T[], item: T) {
    const index = arr.indexOf(item)
    if (index > -1) arr.splice(index, 1)
  }

  return (
    <div>
      <button
        onClick={() => {
          count.current++
          setItems([...items, count.current])
        }}
      >
        add item
      </button>
      <ul>
        <AnimatePresence mode='popLayout'>
          {items.map((id) => {
            return (
              <motion.li
                layout
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring' }}
                style={{ backgroundColor: 'red', width: 100, height: 100, margin: 15 }}
                key={id}
                onClick={() => {
                  const newItems = [...items]
                  removeItem(newItems, id)
                  setItems(newItems)
                }}
              ></motion.li>
            )
          })}
        </AnimatePresence>
      </ul>
    </div>
  )
}

export default Progress

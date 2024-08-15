'use client'

import styles from './Navbar.module.css'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'

export const Navbar = () => {
  const control1 = useAnimation()
  const control2 = useAnimation()
  const control3 = useAnimation()
  const control4 = useAnimation()

  const controlList = [control1, control2, control3, control4]

  const items = [
    { route: '/splits', label: 'Splits' },
    { route: '/record', label: 'Record' },
    { route: '/weight', label: 'Weight' },
    { route: '/progress', label: 'Progress' },
  ]

  const showUnderline = (ind: number) => {
    const control = controlList[ind]
    control.start({
      width: `70%`,
    })
  }

  const removeUnderline = (ind: number) => {
    const control = controlList[ind]
    control.start({
      width: 0,
    })
  }

  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link href='/' className={styles.logo_link}>
            <img src='/images/dumbbell-white.png' />
            <div>The Gym</div>
          </Link>
        </div>

        <div className={styles.links}>
          {items.map((value, key) => {
            return (
              <div key={key} className={styles.link_container}>
                <div
                  className={styles.link_item_div}
                  onMouseEnter={() => showUnderline(key)}
                  onMouseLeave={() => removeUnderline(key)}
                >
                  <Link href={value.route} className={styles.link_item}>
                    {value.label}
                  </Link>
                </div>

                <motion.div
                  className={styles.underline}
                  animate={controlList[key]}
                ></motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

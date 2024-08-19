import React, { ReactElement } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  children: ReactElement[]
}

export const Button = ({ children }: ButtonProps) => {
  let subComponentList = Object.keys(Button)

  let subComponents = subComponentList.map((key) => {
    return React.Children.map(children, (child: any) => (child.type.name === key ? child : null))
  })

  return (
    <>
      <div className='card'>{subComponents.map((component) => component)}</div>
    </>
  )
}

const Header = (props: { children: string }) => <div>{props.children}</div>
Button.Header = Header

const Body = (props: { children: string }) => <div className={styles.primary}>{props.children}</div>
Button.Body = Body

const Footer = (props: { children: string }) => <div className='card-footer'>{props.children}</div>
Button.Footer = Footer

import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

export const Button = () => <></>

const Header = ({ children, ...props }: ButtonProps) => <button {...props}>{children}</button>
Button.Header = Header

const Body = (props: { children: string }) => <div className={styles.primary}>{props.children}</div>
Button.Body = Body

const Footer = (props: { children: string }) => <div className='card-footer'>{props.children}</div>
Button.Footer = Footer

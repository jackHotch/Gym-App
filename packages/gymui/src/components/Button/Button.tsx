import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string
}

export const Button = () => <></>

const Primary = ({ children = 'Primary', ...props }: ButtonProps) => (
  <button {...props} className={styles.primary}>
    {children}
  </button>
)
Button.Primary = Primary

const Secondary = ({ children = 'Secondary', ...props }: ButtonProps) => (
  <button {...props} className={styles.secondary}>
    {children}
  </button>
)
Button.Secondary = Secondary

const Danger = ({ children = 'Danger', ...props }: ButtonProps) => (
  <button {...props} className={styles.danger}>
    {children}
  </button>
)
Button.Danger = Danger

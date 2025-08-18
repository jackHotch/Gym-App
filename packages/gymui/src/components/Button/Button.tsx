import React from 'react'
import { cn } from '../../libs/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { TailSpin } from 'react-loader-spinner'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-medium cursor-pointer text-sm rounded-md',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary-600 rounded-md',
        secondary:
          'bg-white border-primary border-2 hover:bg-primary transition duration-200',
        danger: 'bg-danger text-white hover:bg-danger-600',
        text: 'bg-none text-primary',
        loading: 'bg-primary-300 text-white cursor-not-allowed',
        disabled: 'bg-primary-300 text-white cursor-not-allowed',
      },
      size: {
        sm: 'h-8 px-3 text-xs rounded-md',
        default: 'h-9 px-4 py-2 rounded-md',
        lg: 'h-10 px-8 rounded-md',
        xl: 'h-11 px-12 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        disabled={variant == 'disabled' || variant == 'loading'}
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {variant == 'loading' ? (
          <>
            <TailSpin color='white' width='16px' height='16px' /> Please Wait
          </>
        ) : (
          children
        )}
      </button>
    )
  }
)

import { forwardRef, type ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center gap-2 rounded-lg text-white',

  variants: {
    variant: {
      primary:
        'bg-blue-500 text-white transition hover:bg-white hover:text-black text-center justify-center',
      secondary:
        'text-white border border-blue-400 transition hover:bg-blue-400 hover:border-1 hover:border-transparent',
    },

    size: {
      default: 'px-6 py-4',
      sm: 'px-3 py-1.5',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={button({ variant, size, className })}
      />
    )
  }
)

Button.displayName = 'Button'

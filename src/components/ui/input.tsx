import { forwardRef, type ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={twMerge(
        'border-b border-b-gray-700 bg-transparent p-3 outline-none transition placeholder:text-sm placeholder:text-gray-400 focus:border-b-blue-500',
        props.className
      )}
    />
  )
})

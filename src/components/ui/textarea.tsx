import { forwardRef, type ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TextareaProps = ComponentProps<'textarea'>

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        className={twMerge(
          'rounded-lg border border-gray-700 bg-transparent p-3 outline-none transition placeholder:text-sm placeholder:text-gray-400 focus:border-blue-500',
          props.className
        )}
      />
    )
  }
)

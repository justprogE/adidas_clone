import * as React from 'react';
import { cn } from '../lib/cn';
import { useFormField } from './Form';

// eslint-disable-next-line
export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    const { error, notEmpty } = useFormField();
    return (
      <input
        type={type}
        className={cn(
          'p-[15px] py-[13px] text-base w-full input border-black border-[1px]',
          {
            'border-b-[var(--error)] border-b-2': error,
            'border-b-[var(--valid)] border-b-2': notEmpty && !error,
          },
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };

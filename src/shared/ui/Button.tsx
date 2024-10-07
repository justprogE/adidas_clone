import { cva, type VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import { ComponentPropsWithoutRef } from 'react';
import arrow from '../assets/arrow.svg';

const button = cva(
  [
    'disabled:opacity-60 w-full font-hausBold disabled:cursor-not-allowed p-[15px] text-black relative text-sm flex items-center justify-between uppercase tracking-[2px] transition-all duration-300',
    'after:absolute',
    "after:content-['']",
    'after:border-t-[1px]',
    'after:border-r-[1px]',
    'after:h-full',
    'after:right-[-3px]',
    'after:top-[3px]',
    'after:w-[3px]',
    'before:absolute',
    "before:content-['']",
    'before:border-b-[1px]',
    'before:border-l-[1px]',
    'before:h-[3px]',
    'before:left-[3px]',
    'before:bottom-[-3px]',
    'before:w-full',
    'hover:opacity-80',
  ],
  {
    variants: {
      intent: {
        primary: [
          'filter_black',
          'bg-white',
          'after:border-white',
          'before:border-white',
        ],
        secondary: [
          'filter_white bg-black',
          'before:border-black after:border-black bg-black text-white',
        ],
        border: [
          'filter_black',
          'border-[1px] border-black',
          'after:none',
          'before:none',
        ],
        auto: ['filter_auto'],
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  },
);

type ButtonProps = ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof button>;

function Button({
  className,
  intent,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={button({ intent, className })}
      disabled={disabled}
      {...props}
    >
      {children}
      <Image className="buttonImage" src={arrow} width={22} alt="" />
    </button>
  );
}

export default Button;

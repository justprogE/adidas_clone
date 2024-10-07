'use client'; // eslint-disable-line
import React from 'react';
import Button from '@/shared/ui/Button';
import Mobile from './mobile';
import Content from './content';

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="hidden md:grid grid-cols-[1fr_1fr] p-[15px] bg-black">
        <p className="text-center text-sm uppercase text-white font-bold">
          login
        </p>
        <p className="text-center text-sm uppercase text-white font-bold">
          Your bag
        </p>
      </div>

      {!localStorage.getItem('access_token') && (
        <div className="bg-joinAdiclub py-10 flex items-center justify-center gap-7 md:flex md:flex-col md:gap-2">
          <span className="text-3xl uppercase font-neueBold tracking-[1.5px] text-center">
            join our adiclub & get 15% off
          </span>
          <Button className="max-w-[220px]" intent={'secondary'}>
            sign up for free
          </Button>
        </div>
      )}
      <div className="flex justify-center p-10 pb-7 px-[15px] md:block md:bg-black md:py-[15px]">
        <Mobile />
        <Content />
      </div>
      <div className="bg-[#282c31] py-[15px] h-[120px] flex items-center flex-col">
        <div className="flex gap-7 py-[15px] px-[10px]">
          <span className="text-xs text-[#d2d7da]">Your Privacy Choices</span>
          <span className="relative text-xs text-[#d2d7da] before:content-[''] before:h-5 before:w-[1px] before:bg-white before:absolute before:left-[-15px] after:absolute after:content-[''] after:w-[1px] after:h-5 after:bg-white after:right-[-15px]">
            Privacy Policy
          </span>
          <span className="text-xs text-[#d2d7da]">Terms and Conditions</span>
        </div>
        <span className="text-xs text-[#d2d7da] pt-5">
          © 2024 adidas America, Inc.
        </span>
      </div>
    </footer>
  );
}

import React from 'react';
import Image from 'next/image';
import flag from '@/shared/assets/flag.svg';

export function Options() {
  const headerTopContent = [
    'help',
    'orders and returns',
    'join adiClub',
    <div key={1} className="border-[1px] border-black">
      <Image key={'image'} className="w-5" src={flag} alt="flag" />
    </div>,
  ];
  return (
    <ul className="flex justify-end gap-5 py-2 md:hidden pr-[10px]">
      {headerTopContent.map((content, key) => (
        <li key={key}>
          <a
            className="text-[12px] leading-4 flex justify-center items-center"
            href="#"
          >
            {content}
          </a>
        </li>
      ))}
    </ul>
  );
}

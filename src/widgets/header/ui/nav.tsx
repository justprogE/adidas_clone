import Link from 'next/link';
import React from 'react';
import { navs } from '../model/nav';

export function Nav() {
  return (
    <nav className="flex justify-center xl:justify-start">
      <ul className="flex items-center h-12">
        {Object.entries(navs).map(([path, title]) => (
          <Link
            key={path}
            className="lg:text-[12px] px-[10px] uppercase text-sm font-bold tracking-[1.87px] hover:nav_underline"
            href={path}
          >
            {title}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import back from '../assets/back.svg';

function RoutePaths({ paths }: { paths: React.ReactNode[] }) {
  function historyBack() {
    return window.history.back();
  }
  return (
    <div className="flex gap-[10px]">
      <div
        onClick={() => historyBack()}
        className="flex cursor-pointer pt-[2.5px] gap-[10px] route hover:bg-black"
      >
        <Image className="w-[19px] h-[26.6px]" src={back} alt="back" />
        <span className="font-hausBold uppercase text-sm select-none underline tracking-[2px]">
          back
        </span>
      </div>
      <div>
        <Link
          href={'/'}
          className="underline hover:bg-black hover:text-white select-none cursor-pointer"
        >
          Home
        </Link>
      </div>
      <ul className="flex gap-[10px]">
        {Object.entries(paths).map(([path, element]) => (
          <li key={path}>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default RoutePaths;

import Link from 'next/link';
import React from 'react';

export function LinkPath({ path }: { path: string }) {
  return (
    <Link className="flex gap-[5px]" href={path}>
      /
      <p className="capitalize underline hover:bg-black hover:text-white select-none cursor-pointer">
        {path}
      </p>{' '}
    </Link>
  );
}
export function CurrentPath({ path }: { path: string }) {
  return (
    <div className="flex gap-[5px]">
      /<p className="capitalize select-none">{path}</p>{' '}
    </div>
  );
}

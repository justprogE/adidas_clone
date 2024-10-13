'use client'; // eslint-disable-line
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { cn } from '../lib/cn';

type TEvent = React.MouseEvent<HTMLDivElement>;
type TargetWithId = { id: string } & EventTarget;

function Sizes({
  sizes,
  active,
  setActive,
}: {
  sizes: string[];
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}) {
  useEffect(() => {
    setActive(sizes[0]);
  }, [sizes]);
  return (
    <div>
      <h2 className="text-base font-bold mt-10 mb-1">Sizes</h2>
      <div className="w-full grid template_size gap-y-[5px] gap-1">
        {sizes.map((size) => (
          <div
            className={cn(
              'cursor-pointer flex items-center justify-center text-sm bg-[#eceff1] h-10 hover:bg-black hover:text-white transition-all duration-150',
              {
                'bg-black text-white font-bold hover:none': size === active,
              },
            )}
            key={size}
            id={size}
            onClick={(e: TEvent) => setActive((e.target as TargetWithId).id)}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sizes;

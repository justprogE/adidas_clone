import React, { useState } from 'react';
import { cn } from '@/shared/lib/cn';
import { JustForYou } from './justForYou';
import { EarnPoints } from './earnPoints';
import { PointShop } from './pointShop';

export function Tabs() {
  const tabs = ['just for you', 'point shop', 'earn points'];

  const [tab, setTab] = useState(tabs[0]);

  const content = {
    'just for you': <JustForYou />,
    'point shop': <PointShop />,
    'earn points': <EarnPoints />,
  };
  return (
    <div>
      <div className="px-5 w-full overflow-x-hidden bg-white border-[#d3d7da] border-[1px] sticky top-[118px] z-10">
        <div
          className="w-full overflow-x-scroll flex gap-1"
          style={{ scrollbarWidth: 'none' }}
        >
          {tabs.map((title) => (
            <div
              key={title}
              onClick={() => setTab(title)}
              className={cn(
                'p-[15px] cursor-pointer text-[#767677] hover:border-b-[3px] hover:border-black',
                {
                  'border-b-[3px] border-b-black text-black': tab === title,
                },
              )}
            >
              <span className="text-nowrap tracking-[2px] uppercase font-bold text-xs h-min">
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div>{content[tab as keyof typeof content]}</div>
    </div>
  );
}

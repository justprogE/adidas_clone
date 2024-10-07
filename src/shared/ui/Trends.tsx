import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import sl from '../assets/sl.avif';
import bestFriends from '../assets/best_friends.avif';
import samba from '../assets/samba.avif';
import athletePack from '../assets/athlete_pack.png';

export const Trends = () => {
  const recommendedProducts = {
    'sl 72': {
      image: sl,
      desc: 'Discover the effortless appeal of the retro-inspired classic.',
    },
    'discover the new adidas 2024 athlete pack': {
      image: athletePack,
      desc: 'Made to unite all athletes who share a burning passion to make any moment shine.',
    },
    'best friends forever': {
      image: bestFriends,
      desc: 'The adidas | Marvel Studios’ Deadpool & Wolverine Collection is here.',
    },
    samba: { image: samba, desc: 'Iconic has no limits.' },
  };

  return (
    <div className="w-[1640px] max-w-full grid grid-cols-[25%_25%_25%_25%] gap-3 py-12 px-[110px] mx-auto 2xl:px-[64px] md:trends md:overflow-x-scroll scroll_width">
      {Object.entries(recommendedProducts).map(([title, { image, desc }]) => (
        <Link key={title} className="w-full" href="#">
          <div className="w-full flex flex-col gap-2">
            <Image className="w-full" src={image} alt={`${title}`} />
            <strong className="text-base font-hausBold uppercase">
              {title}
            </strong>
            <p className="font-normal text-[13px]">{desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

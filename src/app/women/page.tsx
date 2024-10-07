import React from 'react';
import women from '@/shared/assets/women.avif';
import womenMobile from '@/shared/assets/women_mobile.avif';
import { Trends } from '@/shared/ui/Trends';
import { Clothes } from '@/shared/ui/Clothes';
import { PageHeader } from '@/widgets/pageHeader';

const Women = () => {
  const clothes = {
    shoes: {
      image:
        'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/95e16ccb5d4a49fbbb90af2858747f2f_9366/gazelle-bold-shoes.jpg',
      path: 'women-shoes',
    },
    tops: {
      image:
        'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/ca69d27226794cbc8682e3d5c311c80f_9366/neuclassics-track-top.jpg',
      path: 'women-tops',
    },
    pants: {
      image:
        'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/ee6098bb8e8f40b58fbd4e562b6357d5_9366/adicolor-neuclassics-track-pants.jpg',
      path: 'women-shorts',
    },
    'matching sets': {
      image:
        'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/79d4bc7b2149435e8bb742f1ef68a613_9366/adicolor-classics-sst-track-jacket-plus-size.jpg',
      path: 'women-matching_sets',
    },
  };

  return (
    <div>
      <PageHeader
        image={women}
        imageMobile={womenMobile}
        title="UNLOCK THE BEST OF ADICLUB"
        subtitle="Hello adiClub Days! Shop exclusive offers and sales through 10/2 - only for adiClub members."
      />
      <Clothes clothes={clothes} />
      <Trends />
      <div className="py-[60px] text-center px-[20%]">
        <h2 className="my-[10px] uppercase text-3xl font-neueBold">
          women&apos;s clothing & shoes
        </h2>
        <p className="text-lg">
          In sport and in life, creators aren’t content on the sidelines. adidas
          women’s shoes and apparel are made for those who understand that rules
          can be negotiated; expectations, evolved. Reach for a new personal
          best in apparel made of specialized performance fabrics. Accentuate
          your personal style in sport-inspired sneakers for your day-to-day.
          Whether sport is your life or you’re an athleisure fashionista,
          women’s clothing and footwear from adidas exist to help you redefine
          what’s possible.
        </p>
      </div>
    </div>
  );
};

export default Women;

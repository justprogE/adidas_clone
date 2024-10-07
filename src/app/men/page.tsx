import React from 'react';
import men from '@/shared/assets/men.avif';
import menMobile from '@/shared/assets/men_mobile.avif';
import { Trends } from '@/shared/ui/Trends';
import { Clothes } from '@/shared/ui/Clothes';
import { PageHeader } from '@/widgets/pageHeader';

const Men = () => {
  const clothes = {
    shoes: {
      image:
        'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/87230f49c8554e09a7149063590c89ca_9366/sambae-shoes.jpg',
      path: 'men-shoes',
    },
    tops: {
      image:
        'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/993f00e1b97d4d9d832b3d51fc580524_9366/training-supply-sport-tee-1.jpg',
      path: 'men-tops',
    },
    'hoodies & sweatshirts': {
      image:
        'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/aa4bc902676d4c52b1a1529f7f144d85_9366/z.n.e.-hoodie.jpg',
      path: 'men-hoodies',
    },
    pants: {
      image:
        'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/967532722b42403383e7b7a347623733_9366/essentials-3-stripes-open-hem-fleece-pants.jpg',
      path: 'men-shorts',
    },
  };
  return (
    <div>
      <PageHeader
        image={men}
        imageMobile={menMobile}
        title="best fit forward"
        subtitle="From tees to sneakers, shop spotlight-stealing styles for back to school."
      />
      <Clothes clothes={clothes} />
      <Trends />
      <div className="py-[60px] text-center px-[20%]">
        <h2 className="my-[10px] uppercase text-3xl font-neueBold">
          men&apos;s clothing & shoes
        </h2>
        <p className="text-lg">
          As a creator, you look for ways to excel and express yourself when and
          where you can, from reaching for that last rep to evolving your
          streetwear style. Log miles or tear down the baseline in men&apos;s
          shoes with responsive cushioning. Rep an athletic style off the field
          in lifestyle apparel born of sport heritage. From athletes to
          streetwear enthusiasts, adidas men’s clothing and shoes exist to let
          you go harder, dig deeper, and get the most out of yourself, from the
          pitch to the street to the road less traveled.
        </p>
      </div>
    </div>
  );
};

export default Men;

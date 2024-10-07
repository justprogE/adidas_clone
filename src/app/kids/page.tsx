import React from 'react';
import { PageHeader } from '@/widgets/pageHeader';
import { Clothes } from '@/shared/ui/Clothes';
import { Trends } from '@/shared/ui/Trends';
import kids from '@/shared/assets/kids.avif';
import kidsMobile from '@/shared/assets/kids_mobile.avif';

function Kids() {
  const clothes = {
    shoes: {
      image:
        'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/2efd8e1c9bf74cb38c07dbcab0307805_9366/samba-xlg-shoes-kids.jpg',
      path: 'kids-shoes',
    },
    tops: {
      image:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1a69eff1774f4371b013639bcfac7b58_9366/Real_Madrid_24-25_Home_Jersey_Kids_White_IT5186_21_model.jpg',
      path: 'kids-tops',
    },
    'hoodies & sweatshirts': {
      image:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b484f2c6a6db4f34831609844c080049_9366/adidas_Z.N.E._Full-Zip_Hooded_Track_Jacket_Kids_Black_JF2847_21_model.jpg',
      path: 'kids-hoodies',
    },
    pants: {
      image:
        'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/967532722b42403383e7b7a347623733_9366/essentials-3-stripes-open-hem-fleece-pants.jpg',
      path: 'kids-shorts',
    },
  };
  return (
    <div>
      <PageHeader
        image={kids}
        imageMobile={kidsMobile}
        title="UNLOCK THE BEST OF ADICLUB"
        subtitle="Hello adiClub Days! Shop exclusive offers and sales through 10/2 - only for adiClub members."
      />
      <Clothes clothes={clothes} />
      <Trends />
    </div>
  );
}

export default Kids;

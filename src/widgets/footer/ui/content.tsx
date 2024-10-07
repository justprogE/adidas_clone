import React from 'react';
import Image from 'next/image';
import facebook from '../../../shared/assets/facebook.png';
import instagram from '../../../shared/assets/instagram.png';
import twitter from '../../../shared/assets/twitter.png';
import pinterest from '../../../shared/assets/pinterest.png';
import tiktok from '../../../shared/assets/tiktok.png';
import youtube from '../../../shared/assets/youtube.png';

function Content() {
  const FOOTER_CONTENT = {
    products: [
      'Shoes',
      'Clothing',
      'Accessories',
      'Gift Cards',
      'New Arrivals',
      'Best Sellers',
      'Release Dates',
      'Sale',
    ],
    sports: [
      'Soccer',
      'Running',
      'Basketball',
      'Football',
      'Outdoor',
      'Golf',
      'Baseball',
      'Tennis',
      'Skateboarding',
      'Training',
    ],
    collections: [
      'adicolor',
      'Ultraboost',
      'NMD',
      'Forum',
      'Superstar',
      'Running Shoes',
      'adilette',
      'Stan Smith',
      'adizero',
      'Tiro',
      'Cloudfoam Pure',
      'Back to School',
    ],
    support: [
      'Help',
      'Returns & Exchanges',
      'Shipping',
      'Order Tracker',
      'Store Locator',
      'Size Charts',
      'Gift Card Balance',
      'How to Clean Shoes',
      'Bra Fit Guide',
      'Breathing for Running',
      'Promotions',
    ],
    'company info': [
      'About Us',
      'Student Discount',
      'Military & Healthcare Discount',
      'adidas Stories',
      'adidas Apps',
      'Impact',
      'People',
      'Planet',
      'adiClub',
      'Affiliates',
      'Press',
      'Careers',
      'California Transparency in Supply Chains Act',
      'Responsible Disclosure',
      'Transparency in Coverage',
    ],
    'follow us': [
      <Image key={1} src={facebook} alt="facebook" />,
      <Image key={2} src={instagram} className="mt-2" alt="instagram" />,
      <Image key={3} src={twitter} className="mt-2" alt="twitter" />,
      <Image key={4} src={pinterest} className="mt-2" alt="pinterest" />,
      <Image key={5} src={tiktok} className="mt-2" alt="tiktok" />,
      <Image key={6} src={youtube} className="mt-2" alt="youtube" />,
    ],
  };
  return (
    <ul className="md:hidden flex gap-[30px] max-w-[1010px]">
      {Object.entries(FOOTER_CONTENT).map(([title, arr]) => (
        <li key={title}>
          <h5 className="text-lg font-neueBold tracking-[1px] uppercase mb-[10px]">
            {title}
          </h5>
          <ul>
            {arr.map((content, index) => (
              <li key={index} className="">
                <a className="text-sm hover:underline" href="#">
                  {content}
                </a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default Content;

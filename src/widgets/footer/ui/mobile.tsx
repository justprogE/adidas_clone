import React from 'react';

function Mobile() {
  const FOOTER_CONTENT_MOBILE = {
    first: [
      'Help',
      'Returns & Exchanges',
      'Order Tracker',
      'Shipping',
      'Promotion',
      'Country Selector',
    ],
    second: [
      'adiClub',
      'Store Finder',
      'Gift Cards',
      'adidas Apps',
      'Size Charts',
    ],
  };
  return (
    <ul className="hidden md:grid md:grid-cols-[1fr_1fr] md:justify-normal ">
      {Object.entries(FOOTER_CONTENT_MOBILE).map(([_, arr]) => (
        <li key={_} className="text-center">
          <ul>
            {arr.map((content, index) => (
              <li key={index} className="md:text-white text-xs py-[15px]">
                {content}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default Mobile;

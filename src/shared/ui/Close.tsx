import React from 'react';
import Image from 'next/image';
import close from '../assets/close.svg';

function Close() {
  return <Image className="w-[24px] h-[26.6px]" src={close} alt="" />;
}

export default Close;

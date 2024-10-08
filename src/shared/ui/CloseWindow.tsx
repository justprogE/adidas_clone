import React, { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import close from '../assets/close.svg';

function CloseWindow({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      onClick={() => setOpen(false)}
      className="md:right-[25px] w-[50px] h-[50px] absolute top-[-25px] right-[-25px] border-black border-[1px] bg-white flex items-center justify-center cursor-pointer"
    >
      <Image className="w-7 h-[26.6px]" src={close} alt="" />
    </div>
  );
}

export default CloseWindow;

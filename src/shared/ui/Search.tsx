'use client'; // eslint-disable-line
import React, { useState } from 'react';
import Image from 'next/image';
import search from '../assets/search.svg';

function Search() {
  const [value, setValue] = useState('');
  return (
    <div className="max-w-full w-[230px] slg:w-[120px] h-8 bg-[#eceff1] flex items-center px-1 relative">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="outline-0 w-full bg-transparent mr-1 font-adiRegular"
        type="text"
        placeholder="Search"
      />
      <Image className="w-[23px] h-[25px]" src={search} alt="search" />
    </div>
  );
}

export default Search;

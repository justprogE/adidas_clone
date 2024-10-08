'use client'; // eslint-disable-line
import Image from 'next/image';
import React from 'react';
import { DetailsEdit } from '@/features/detailsEdit';
import { userQueries } from '@/entities/user/api';
import { EmailEdit } from '@/features/emailEdit';
import { PasswordEdit } from '@/features/passwordEdit';
import { LogoutButton } from '@/features/logoutButton';
import { DeleteAccountButton } from '@/features/deleteAccountButton';
import adiclubLevel from '../../shared/assets/adiclub_header_level_1.svg';

const Account = () => {
  const { data } = userQueries.get();
  return (
    <div className="bg-[#f7f7f7]">
      <div className="bg-white pt-10">
        <div className="max-w-[1370px] px-[15px] mx-auto flex justify-between">
          <div>
            <h1 className="uppercase text-[30px] font-neueBold">Hi Level 1</h1>
          </div>
          <Image src={adiclubLevel} alt="" />
        </div>
        <div className="h-[65px]"></div>
      </div>

      <div className="w-[1600px] max-w-full mx-auto px-[30px] md:px-0 flex gap-[95px] my-20  md:my-0">
        <div className="min-w-[300px] md:hidden">
          <h5 className="text-lg uppercase font-neueBold">account overview</h5>
          <div className="bg-white mt-5">
            <div className="px-[15px] py-[17px] hover:bg-black hover:text-white hover:font-bold transition-all duration-300 cursor-pointer">
              <span className="text-base">Personal Information</span>
            </div>
            <div className="px-[15px] py-[17px] hover:bg-black hover:text-white hover:font-bold transition-all duration-300 cursor-pointer">
              <span className="text-base">Log out</span>
            </div>
          </div>
        </div>

        <div className="w-full bg-white px-[21px] py-[17px]">
          <h4 className="my-[15px] text-[30px] uppercase font-neueBold">
            my details
          </h4>
          <p>
            Feel free to edit any of your details below so your account is up to
            date.
          </p>
          <h4 className="mt-[60px] mb-[15px] uppercase font-neueBold text-[30px]">
            details
          </h4>
          <p className="uppercase">
            {data?.user?.firstName && data?.user?.lastName
              ? `${data?.user?.firstName} ${data?.user?.lastName}`
              : 'name'}
          </p>
          <p className="uppercase mt-[15px]">date</p>
          <p className="uppercase mt-[15px]">
            {data?.user?.gender ?? 'gender'}
          </p>
          <div className="mt-[10px]">
            <DetailsEdit />
          </div>
          <h4 className="mt-[60px] mb-[15px] uppercase font-neueBold text-[30px]">
            login details
          </h4>
          <h5 className="uppercase font-neueBold text-lg">email</h5>
          <p className="uppercase mt-[15px]">{data?.user?.email}</p>

          <div className="mt-[10px]">
            <EmailEdit />
          </div>

          <h5 className="uppercase font-neueBold text-lg mt-10">password</h5>
          <p className="uppercase mt-[15px]">************</p>
          <div className="mt-[10px]">
            <PasswordEdit />
          </div>
          <h5 className="uppercase font-neueBold text-lg mt-10 ">
            Log out from all web browsers
          </h5>
          <p className="mt-[10px]">
            This will log you out from all web browsers you have used to access
            the adidas website. To log in again, you&apos;ll have to enter your
            credentials.
          </p>
          <LogoutButton />
          <DeleteAccountButton />
        </div>
      </div>
    </div>
  );
};

export default Account;

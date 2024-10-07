import React, { useState } from 'react';
import Image from 'next/image';
import adiclub from '@/shared/assets/adiclub.svg';
import { AuthEmailForm } from './authEmailForm';
import { AuthPasswordForm } from './authPasswordForm';

export function Auth() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  return (
    <div>
      <Image className=" pb-5" src={adiclub} alt="adiclub" />
      <h3 className="uppercase text-3xl font-neueBold">
        Your adiClub benefits await
      </h3>
      <p className="text-ms font-normal mt-[25px]">
        Get free shipping, discount vouchers and members only products when
        you’re in adiClub.
      </p>
      <p className="font-hausBold text-base my-[15px]">
        Log in or sign up (it’s free)
      </p>
      {step === 0 && <AuthEmailForm setData={setData} setStep={setStep} />}
      {step === 1 && <AuthPasswordForm data={data} />}
      <p className="text-[#767677] text-base mt-[15px] pr-5">
        Sign me up to adiClub, featuring exclusive adidas offers and news
      </p>
      <p className="text-[#767677] text-sm pr-5">
        By clicking the “Continue” button, you are joining adiClub, will receive
        emails with the latest news and updates, and agree to the TERMS OF USE
        and ADICLUB TERMS AND CONDITIONS and acknowledge you have read the . If
        you are a California resident, the adiClub membership may be considered
        a financial incentive. Please see the Financial Incentives section of
        our CALIFORNIA PRIVACY NOTICE for details.
      </p>
    </div>
  );
}

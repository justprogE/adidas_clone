'use client';

import Image from 'next/image';
import React, { useContext } from 'react';
import { CartContext } from '@/features/cart';
import Button from '@/shared/ui/Button';
import americanExpress from '@/shared/assets/americanExpress.svg';
import googlePay from '@/shared/assets/google_pay.svg';
import discover from '@/shared/assets/discover.svg';
import mastercard from '@/shared/assets/mastercard.svg';
import klarna from '@/shared/assets/klarna.svg';
import googlepay from '@/shared/assets/googlepay.svg';
import visa from '@/shared/assets/visa.svg';
import affirm from '@/shared/assets/affirm.svg';
import afterpay from '@/shared/assets/afterpay.svg';
import paypal from '@/shared/assets/paypal.svg';
import { ItemCart } from '@/entities/cart';
import { AuthContext } from '@/features/session';

const Cart = () => {
  const payment = {
    'american-express': americanExpress,
    discover,
    mastercard,
    klarna,
    googlepay,
    visa,
    affirm,
    afterpay,
    paypal,
  };
  const { cart } = useContext(CartContext);
  const { setOpenAuth } = useContext(AuthContext);
  if (cart?.length < 1) {
    return (
      <div className="container mt-[120px]">
        <div className="ml-[12.5%]">
          <h3 className="mb-10 text-4xl font-neueBold uppercase">
            Your Bag is Empty
          </h3>
          <p className="mb-[30px] text-base">
            Once you add something to your bag, it will appear here. Ready to
            get started?
          </p>
          <Button className="max-w-[180px] mb-[120px]" intent={'secondary'}>
            get started
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[1600px] max-w-full px-[15px] mx-auto flex flex-wrap pt-[50px] 3xl:w-[1280px] xl:w-[1145px]">
      <div className="w-[45.833%] ml-[12.5%] 3xl:w-[58.33%] 3xl:ml-[4.666666%] xl:ml-0 md:w-full">
        {!localStorage.getItem('access_token') && (
          <span
            onClick={() => setOpenAuth(true)}
            className="hidden md:block mb-10 underline text-sm uppercase hover:bg-black hover:text-white font-hausBold tracking-[2px] cursor-pointer"
          >
            Login and checkout faster
          </span>
        )}
        <h3 className="uppercase text-4xl font-neueBold">your bag</h3>
        <p className="mt-5">
          <span>TOTAL: ({cart?.length} item) </span>
          <strong>$ 100</strong>
        </p>
        <p className="mt-[10px] text-base">
          Items in your bag are not reserved — check out now to make them yours.
        </p>
        <div className="mt-10 flex flex-col gap-3">
          {cart?.map((item) => (
            <ItemCart key={`${item?.id}${item?.size}`} product={item} />
          ))}
        </div>
      </div>
      <div className="w-[25%] ml-[4.166666%] 3xl:w-[29%] xl:w-[37.5%] md:w-full md:ml-0 pb-[100px]">
        {!localStorage.getItem('access_token') && (
          <span
            onClick={() => setOpenAuth(true)}
            className="md:hidden underline text-sm uppercase hover:bg-black hover:text-white font-hausBold tracking-[2px] cursor-pointer"
          >
            Login and checkout faster
          </span>
        )}
        <Button className="mt-[60px]" intent={'secondary'}>
          checkout
        </Button>
        <Button intent={'auto'} className="border-black border-[1px] mt-5">
          <Image src={googlePay} alt="googlePay" />
        </Button>
        <h5 className="mt-[60px] uppercase text-xl font-neueBold mb-[30px]">
          order summary
        </h5>
        <div className="w-full flex justify-between">
          <span>{cart?.length} items</span>
          <span>$220</span>
        </div>
        <div className="w-full flex justify-between">
          <span>Sales Tax</span>
          <span>$27</span>
        </div>
        <div className="w-full flex justify-between">
          <span>Delivery</span>
          <span>$4.99</span>
        </div>
        <div className="w-full flex justify-between mt-5">
          <span className="font-bold">Total</span>
          <span className="font-bold">$4.99</span>
        </div>
        <div>
          <p className="text-xs font-hausBold tracking-[2px] uppercase mt-10">
            Accepted payment methods
          </p>
          <div className="flex flex-wrap">
            {Object.entries(payment).map(([title, image]) => (
              <Image
                height={30}
                className="m-2 ml-0 max-w-[55px]"
                key={title}
                src={image}
                alt={title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
